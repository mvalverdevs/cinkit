from utils.views import GeneralViewSet
from image_library.models import Image, ImageCategory
from image_library.serializers import ImageSerializer, ImageCategorySerializer
from rest_framework.parsers import MultiPartParser
from rest_framework import mixins


class ImageView(GeneralViewSet, mixins.DestroyModelMixin):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    parser_classes = (MultiPartParser, )
    filterset_fields = (
        'category_id',
    )


class ImageCategoryView(GeneralViewSet, mixins.DestroyModelMixin):
    queryset = ImageCategory.objects.all()
    serializer_class = ImageCategorySerializer
