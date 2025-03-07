from rest_framework import viewsets, permissions, generics
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from django.http import HttpResponse

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    def get_serializer_context(self):
        return {"request": self.request}

class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]

def upload_products(request):
    return HttpResponse("Upload Products Page")