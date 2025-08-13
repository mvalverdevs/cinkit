from django.db import models


class Image(models.Model):
    image = models.FileField(
        verbose_name=u'Recipe image',
        upload_to='images/',
        null=True
    )

    category = models.ForeignKey(
        to="ImageCategory",
        null=True,
        on_delete=models.SET_NULL
    )


class ImageCategory(models.Model):
    name = models.CharField()
