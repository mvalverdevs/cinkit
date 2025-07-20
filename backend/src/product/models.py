from django.db import models


class Product(models.Model):
    name = models.CharField()

    image = models.ForeignKey(
        to='document_library.DocumentLibrary',
        on_delete=models.SET_NULL,
        null=True
    )

    price = models.DecimalField(
        default=0.00,
        decimal_places=2,
        max_digits=6
    )
