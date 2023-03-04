from django.db import models


class ArrayField(models.TextField):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def from_db_value(self, value, expression, connection):
        if value is None:
            return value
        return value.split(',')

    def to_python(self, value):
        if isinstance(value, list):
            return value
        if value is None:
            return value
        return value.split(',')

    def get_prep_value(self, value):
        if value is None:
            return value
        return ','.join(str(v) for v in value)


class Stock(models.Model):
    stock_id = models.IntegerField(primary_key=True)
    stock_name = models.CharField(max_length=255)
    symbol = models.CharField(max_length=255)
    stock_price = models.DecimalField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()


class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    email_id = models.CharField(max_length=255)
    password = models.CharField(max_length=16)
    balance = models.DecimalField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()


class Transaction(models.Model):
    transaction_id = models.IntegerField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    stock_id = models.ForeignKey(Stock, on_delete=models.CASCADE)
    no_of_shares = models.IntegerField()
    price_of_purchase = models.IntegerField()
    total = models.IntegerField()
    transaction_type_choices = (
        "Buy Limit", "Sell Limit", "Buy Stop", "Sell Stop")
    transaction_type = models.CharField(choices=transaction_type_choices)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()


class WatchList(models.Model):
    watchlist_id = models.IntegerField(primary_key=True)
    stocks = ArrayField()
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    stock_id = models.ForeignKey(Stock, on_delete=models.CASCADE)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
