"""
URL configuration for main project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, re_path
from rest_framework import routers
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from user import views as user_views
from product import views as product_views
from order import views as order_views
from image_library import views as image_library_views


# To register all the urls, add one for each view created
router = routers.DefaultRouter()

urlpatterns = [
    # Documentation and definition
    re_path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    re_path('api/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]

# User views
router.register(
    r'user',
    user_views.UserView,
    basename='user'
)

router.register(
    r'product',
    product_views.ProductView,
    basename='product'
)

router.register(
    r'bill',
    order_views.BillView,
    basename='bill'
)

router.register(
    r'order',
    order_views.OrderView,
    basename='order'
)

router.register(
    r'zone',
    order_views.ZoneView,
    basename='zone'
)

router.register(
    r'image_library',
    image_library_views.ImageView,
    basename='image_library'
)

urlpatterns += [
    re_path(r"^api/", include((router.urls, "current"), namespace="current")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)