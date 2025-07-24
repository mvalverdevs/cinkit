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

    @property
    def orders_number(self):
        return self.orders.all().count()

    @property
    def last_3_products(self):
        orders = self.orders.order_by('-id')
        products = []
        for order in orders:
            for p in order.items.all():
                products.append(p.name)
                if len(products) == 3:
                    break
            if len(products) == 3:
                break
        return ', '.join(products) if products else "Sin productos"


class Order(models.Model):
    created_at = models.DateTimeField(
        auto_now_add=True
    )

    delivered_at = models.DateTimeField(
        auto_now_add=True
    )

    bill = models.ForeignKey(
        to='Bill',
        on_delete=models.CASCADE,
        related_name='orders'
    )

    user = models.ForeignKey(
        to='user.User',
        on_delete=models.SET_NULL,
        null=True
    )

    delivered = models.BooleanField(default=False)

    amount = models.DecimalField(
        default=0.00,
        decimal_places=2,
        max_digits=6,
    )


class OrderItem(models.Model):
    order = models.ForeignKey(
        to='Order',
        on_delete=models.CASCADE,
        related_name='items'
    )

    product = models.ForeignKey(
        to='product.Product',
        on_delete=models.CASCADE
    )

    quantity = models.PositiveIntegerField(
        default=1
    )

    note = models.CharField(null=True)


class Zone(models.Model):
    name = models.CharField()

    image = models.ForeignKey(
        to='image_library.Image',
        on_delete=models.SET_NULL,
        null=True
    )
