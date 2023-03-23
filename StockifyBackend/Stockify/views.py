from django.shortcuts import render
from .serializers import (
    SendPasswordResetEmailSerializer,
    StockTransactionsSerializer,
    UserChangePasswordSerializer,
    UserLoginSerializer,
    UserPasswordResetSerializer,
    UserProfileSerializer,
    UserRegistrationSerializer,
    HoldingsSerializer,
)
from django.shortcuts import redirect
from django.contrib.auth.models import User
from django.contrib.auth import logout, authenticate, login
from .renderers import UserRenderer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from .models import StockTransaction, Holdings


def index(request):
    print(request.user)
    if request.user.is_anonymous:
        return redirect("/login")
    return render(request, "index.html")
    # return render(request, 'index.js')


# Generate Token Manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }


class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = get_tokens_for_user(user)
        return Response(
            {"token": token, "msg": "Registration Successful"},
            status=status.HTTP_201_CREATED,
        )


class UserLoginView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get("email")
        password = serializer.data.get("password")
        user = authenticate(email=email, password=password)
        if user is not None:
            token = get_tokens_for_user(user)
            return Response(
                {"token": token, "msg": "Login Success"}, status=status.HTTP_200_OK
            )
        else:
            return Response(
                {"errors": {"non_field_errors": ["Email or Password is not Valid"]}},
                status=status.HTTP_404_NOT_FOUND,
            )


class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = UserChangePasswordSerializer(
            data=request.data, context={"user": request.user}
        )
        serializer.is_valid(raise_exception=True)
        return Response(
            {"msg": "Password Changed Successfully"}, status=status.HTTP_200_OK
        )


class SendPasswordResetEmailView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = SendPasswordResetEmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(
            {"msg": "Password Reset link send. Please check your Email"},
            status=status.HTTP_200_OK,
        )


class UserPasswordResetView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, uid, token, format=None):
        serializer = UserPasswordResetSerializer(
            data=request.data, context={"uid": uid, "token": token}
        )
        serializer.is_valid(raise_exception=True)
        return Response(
            {"msg": "Password Reset Successfully"}, status=status.HTTP_200_OK
        )


class UserMarketView(APIView):
    renderer_classes = [UserRenderer]

    def market(self, request):
        import requests
        import json

        if request.method == "POST":
            ticker = request.POST["ticker"]
            api_request = requests.get(
                "https://api.iex.cloud/v1/data/CORE/QUOTE/"
                + ticker
                + "TWTR?token=pk_00366a0765ce48"
                "c8b0143cb428fa0d84"
            )
            try:
                api = json.loads(api_request.content)

            except Exception as e:
                api = "Error..."

            return Response({"msg": "Market Data sent"}, status=status.HTTP_200_OK)


class BuyStock(APIView):
    permission_classes = [
        IsAuthenticated,
    ]

    def post(self, request):
        import json

        d = request.data
        d["bidPrice"] = int(d["bidPrice"])
        instance = StockTransaction(
            user=request.user,
            symbol=d["symbol"],
            quantity=d["quantity"],
            bidPrice=d["bidPrice"],
            type=d["type"],
            # cash=d["cash"],

        )

        if instance.symbol:
            # instance.type="Bought"
            # instance.cash=instance.cash-(int(d["quantity"])*int(d["bidPrice"]))
            instance.save()
            if Holdings.objects.filter(user=request.user, symbol=d["symbol"],bidPrice=d["bidPrice"]).count():
                holding = Holdings.objects.get(user=request.user, symbol=d["symbol"],bidPrice=d["bidPrice"])
                holding.holding_count = holding.holding_count + int(d["quantity"])
                holding.save()
            else:
                holding = Holdings(user=request.user, symbol=d["symbol"], holding_count=d["quantity"],bidPrice=d["bidPrice"])
                holding.save()
            
            return Response(data={"success": True}, status=status.HTTP_200_OK)
        else:
            return Response(data={"success": False}, status=status.HTTP_400_BAD_REQUEST)

class SellStock(APIView):
    permission_classes = [
        IsAuthenticated,
    ]

    def post(self, request):
        import json

        d = request.data
        d["bidPrice"] = int(d["bidPrice"])
        instance = StockTransaction(
            user=request.user,
            symbol=d["symbol"],
            quantity=d["quantity"],
            bidPrice=d["bidPrice"],
            type=d["type"],
            # cash=d["cash"],
        )

        if instance.symbol:
            # instance.type="Sold"
            # instance.cash=instance.cash+(int(d["quantity"])*int(d["bidPrice"]))
            instance.save()
            if Holdings.objects.filter(user=request.user, symbol=d["symbol"]).count():
                holding = Holdings.objects.get(user=request.user, symbol=d["symbol"])
                # holding.save()
                if holding.holding_count >= int(d["quantity"]):
                    holding.holding_count = holding.holding_count - int(d["quantity"])
                    holding.save()
                    return Response(data={"success": True}, status=status.HTTP_200_OK)
                else:
                    # holding.holding_count = holding.holding_count + int(d["quantity"])
                    # holding.save()
                    return Response(data={"success": False}, status=status.HTTP_400_BAD_REQUEST)

            else:
                # holding = Holdings(user=request.user, symbol=d["symbol"], holding_count=d["quantity"],bidPrice=d["bidPrice"])
                # holding.save()
                return Response(data={"success": False}, status=status.HTTP_400_BAD_REQUEST)

            
            # return Response(data={"success": True}, status=status.HTTP_200_OK)
        else:
            return Response(data={"success": False}, status=status.HTTP_400_BAD_REQUEST)


class GetHoldings(APIView):
    permission_classes = [
        IsAuthenticated,
    ]

    def get(self, request):
        user = request.user
        queryset = Holdings.objects.filter(user=request.user)
        serializer = HoldingsSerializer(queryset, many=True)
        return Response(data={"orders": serializer.data})

class GetStockTransactions(APIView):
    permission_classes = [
        IsAuthenticated,
    ]

    def get(self, request):
        user = request.user
        queryset = StockTransaction.objects.filter(user=request.user)
        serialized_data = StockTransactionsSerializer(queryset, many=True)
        return Response(data={"orders": serialized_data.data})