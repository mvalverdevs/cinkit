from django.db import models


SIMPLE = "simple"
BUNDLE = "bundle"
PRODUCT_TYPES = (
    (SIMPLE, "Simple"),
    (BUNDLE, "Bundle")
)


class Product(models.Model):
    name = models.CharField()

    image = models.ForeignKey(
        to='image_library.Image',
        on_delete=models.SET_NULL,
        null=True
    )

    price = models.DecimalField(
        default=0.00,
        decimal_places=2,
        max_digits=6
    )

    category = models.ForeignKey(
        to='ProductCategory',
        on_delete=models.SET_NULL,
        null=True
    )

    is_active = models.BooleanField(
        default=True
    )

    type = models.CharField(
        choices=PRODUCT_TYPES,
        default=SIMPLE
    )


class ProductOptionGroup(models.Model):
    class Meta:
        ordering = ["sort_order", "id"]

    product = models.ForeignKey(
        to='Product',
        on_delete=models.CASCADE,
        related_name='option_groups'
    )

    name = models.CharField()

    min_choices = models.PositiveIntegerField(
        default=0
    )

    max_choices = models.PositiveIntegerField(
        default=1
    )

    source_category = models.ForeignKey(
        to='ProductCategory',
        on_delete=models.SET_NULL,
        null=True
    )

    sort_order = models.PositiveIntegerField(
        default=0
    )


class ProductOptionItem(models.Model):
    class Meta:
        ordering = ["sort_order", "id"]
        unique_together = [("group", "product")]

    group = models.ForeignKey(
        to='ProductOptionGroup',
        on_delete=models.CASCADE,
        related_name="items"
    )

    product = models.ForeignKey(
        to='Product',
        on_delete=models.PROTECT,
        related_name="items"
    )

    price_delta = models.DecimalField(
        default=0,
        max_digits=8,
        decimal_places=2,
    )

    is_default = models.BooleanField(
        default=False
    )

    sort_order = models.PositiveIntegerField(
        default=0
    )


class ProductCategory(models.Model):
    name = models.CharField()

    image = models.ForeignKey(
        to='image_library.Image',
        on_delete=models.SET_NULL,
        null=True
    )
