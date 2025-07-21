from django.db import models


class Bill(models.Model):
    created_at = models.DateTimeField(
        auto_now_add=True
    )

    closed_at = models.DateTimeField(
        null=True
    )

    is_open = models.BooleanField(
        default=True
    )

    table = models.ForeignKey(
        to='Table',
        on_delete=models.SET_NULL,
        null=True
    )


class Order(models.Model):
    bill = models.ForeignKey(
        to='Bill',
        on_delete=models.CASCADE
    )

    products = models.ManyToManyField(
        to='product.Product',
        blank=True
    )

    user = models.ForeignKey(
        to='user.User',
        on_delete=models.SET_NULL,
        null=True
    )


class Zone(models.Model):
    name = models.CharField()


class Table(models.Model):
    number = models.IntegerField()

    zone = models.ForeignKey(
        to='Zone',
        on_delete=models.SET_NULL,
        null=True
    )

    is_open = models.BooleanField(
        default=True
    )
