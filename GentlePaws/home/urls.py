from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('checkout.html', views.checkout , name = 'checkout'),
    path('dogfood.html', views.dogfood , name = 'dogfood')
]