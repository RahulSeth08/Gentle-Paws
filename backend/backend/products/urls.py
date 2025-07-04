from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet, ProductListView, upload_products, CartView, CartItemAddView, CartItemUpdateView
from django.conf import settings
from django.conf.urls.static import static
# Using DefaultRouter for ViewSets (automatic URL generation for CRUD operations)
router = DefaultRouter()
router.register(r'categories', CategoryViewSet)  # API: /categories/
router.register(r'products', ProductViewSet, basename='product')  # API: /products/

urlpatterns = [
    path('', include(router.urls)),  # Include all router-generated URLs
    path('list/', ProductListView.as_view(), name='product-list'),  # Custom product list API
    path('upload/', upload_products, name='upload-products'),  # Upload API endpoint
    path('cart/', CartView.as_view(), name='cart-detail'),
    path('cart/items/add/', CartItemAddView.as_view(), name='cartitem-add'),
    path('cart/items/<int:item_id>/', CartItemUpdateView.as_view(), name='cartitem-update'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
