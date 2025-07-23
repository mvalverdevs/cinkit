from django.db import models
from django.db.models import Sum


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

    amount = models.DecimalField(
        default=0.00,
        decimal_places=2,
        max_digits=6,
    )

    zone = models.ForeignKey(
        to='Zone',
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

    delivered = models.BooleanField(default=False)

    @property
    def amount(self):
        return self.products.aggregate(total=Sum('price'))['total'] or 0


class Zone(models.Model):
    name = models.CharField()

    image = models.ForeignKey(
        to='image_library.Image',
        on_delete=models.SET_NULL,
        null=True
    )
