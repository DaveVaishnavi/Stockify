# Generated by Django 4.0.3 on 2023-03-23 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Stockify', '0008_stocktransaction_cash_stocktransaction_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stocktransaction',
            name='cash',
            field=models.FloatField(default=100000),
        ),
    ]