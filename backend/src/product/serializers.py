from utils.serializers import DynamicModelSerializer
from rest_framework.serializers import ListSerializer, ModelSerializer
from product import models as product_models
from image_library.serializers import ImageSerializer


class ProductSerializer(ModelSerializer):
    image_data = ImageSerializer(read_only=True, source='image')

    class Meta:
        model = product_models.Product
        fields = (
            'id',
            'name',
            'image',
            'image_data',
            'price',
            'category',
        )
        read_only_fields = (
            'id',
            'image_data'
        )


class ProductCategorySerializer(ModelSerializer):
    image_data = ImageSerializer(read_only=True, source='image')

    class Meta:
        model = product_models.ProductCategory
        fields = (
            'id',
            'name',
            'image',
            'image_data'
        )
        read_only_fields = (
            'id',
            'image_data',
        )
