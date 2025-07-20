from utils.serializers import DynamicModelSerializer
from product import models as product_models


class ProductSerializer(DynamicModelSerializer):
    class Meta:
        model = product_models.Product
        fields = '__all__'
