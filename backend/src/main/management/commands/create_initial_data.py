from django.core.management.base import BaseCommand
from image_library.models import Image, ImageCategory
from product.models import Product, ProductCategory
from django.core.files import File
from django.conf import settings
from django.contrib.auth import get_user_model


class Command(BaseCommand):
    help = 'Help text'

    def add_arguments(self, parser):
        parser.add_argument('-e', '--example', type=str, help='example command')

    def handle(self, *args, **kwargs):
        InitialData.clean_db()
        InitialData.create_superuser()
        InitialData.initial_data_image_category()
        InitialData.initial_data_product_categories()
        InitialData.initial_data_product()


class InitialData:
    @staticmethod
    def clean_db():
        User = get_user_model()
        User.objects.all().delete()
        Image.objects.all().delete()
        ImageCategory.objects.all().delete()
        ProductCategory.objects.all().delete()
        Product.objects.all().delete()

    @staticmethod
    def initial_data_image_category():
        from main.initial_data.image_library.image_cateories import categories
        for category in categories:
            ImageCategory.objects.create(**category)

    @staticmethod
    def initial_data_product_categories():
        from main.initial_data.product_categories.categorias import product_categories
        for category in product_categories:
            image_path = f'{settings.APPS_DIR}{category.pop("image")}'
            with open(image_path, 'rb') as f:
                category['image'] = Image.objects.create(
                    image=File(f, name='image'),
                )
                ProductCategory.objects.create(
                    **category
                )

    @staticmethod
    def initial_data_product():
        from main.initial_data.products.combinados import combinados
        from main.initial_data.products.refrescos import refrescos

        def create_products(products, category_name):
            for product in products:
                image_path = f'{settings.APPS_DIR}{product.pop("image")}'
                with open(image_path, 'rb') as f:
                    product['image'] = Image.objects.create(
                        image=File(f, name='image'),
                    )
                    product['category'] = ProductCategory.objects.filter(name=category_name).first()
                    Product.objects.create(**product)

        create_products(combinados, 'Combinados')
        create_products(refrescos, 'Refrescos')

    @staticmethod
    def create_superuser():
        User = get_user_model()

        User.objects.create_superuser(
            dni="master",
            password="contraseña"
        )