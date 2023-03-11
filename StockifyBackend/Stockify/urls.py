# from django import views
from django.contrib import admin
from django.urls import path, include
from . import views
from .views import * 

urlpatterns = [
    path('', views.index,name='index'),
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),

    # path("login", views.loginUser,name='login'),
    # path("logout", views.logoutUser,name='logout')
    # path("", views.index, name='login')
]
