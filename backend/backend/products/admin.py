import pandas as pd
from django import forms
from django.contrib import admin, messages
from django.shortcuts import render, redirect
from django.urls import path
from django.http import HttpResponseRedirect
from import_export.admin import ExportMixin
from import_export.resources import ModelResource
from .models import Product, Category


admin.site.site_header = "Gentle Paws"
admin.site.site_title = "Gentle Paws Admin"
admin.site.index_title = "Welcome to Gentle Paws Admin Panel"

# Form for uploading an Excel file
class ProductUploadForm(forms.Form):
    file = forms.FileField()

# Import-Export resource for Product model
class ProductResource(ModelResource):
    class Meta:
        model = Product
        fields = ('name', 'description', 'price', 'stock', 'category')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']

@admin.register(Product)
class ProductAdmin(ExportMixin, admin.ModelAdmin):
    resource_class = ProductResource  # Attach import-export functionality
    list_display = ['name', 'price', 'stock', 'category', 'created_at']
    list_filter = ['category', 'created_at']
    search_fields = ['name', 'description']
    ordering = ['-created_at']

    def image_display(self, obj):
        if obj.image:
            return f'<img src="{obj.image.url}" width="50" height="50" />'
        return "No Image"

    image_display.allow_tags = True
    image_display.short_description = "Image"

    # Custom admin template with Upload button
    change_list_template = "admin/products/change_list.html"

    # Custom URL for uploading products
    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path("upload-products/", self.admin_site.admin_view(self.upload_products), name="upload-products"),
        ]
        return custom_urls + urls

    # Function to display upload form
    def upload_products(self, request):
        if request.method == "POST":
            form = ProductUploadForm(request.POST, request.FILES)
            if form.is_valid():
                file = request.FILES["file"]
                file_name = file.name.lower()

                try:
                    if file_name.endswith(".json"):
                        self.import_from_json(file)
                    elif file_name.endswith(".xlsx") or file_name.endswith(".xls"):
                        self.import_from_excel(file)
                    else:
                        messages.error(request, "Unsupported file format. Upload JSON or Excel.")
                        return redirect(request.path)

                    messages.success(request, "Products uploaded successfully!")
                    return HttpResponseRedirect("../")  # Redirect back to admin panel

                except Exception as e:
                    messages.error(request, f"Error processing file: {str(e)}")
                    return redirect(request.path)

        else:
            form = ProductUploadForm()

        context = {
            "form": form,
            "title": "Upload Products",
            "submit_url": request.path,
        }
        return render(request, "admin/import_form.html", context)

    # Function to import products from JSON
    def import_from_json(self, file):
        import json
        data = json.load(file)
        for item in data:
            category, _ = Category.objects.get_or_create(name=item["category"])
            Product.objects.create(
                name=item["name"],
                description=item.get("description", ""),
                price=item["price"],
                stock=item["stock"],
                category=category,
            )

    # Function to import products from Excel using Pandas
    def import_from_excel(self, file):
        df = pd.read_excel(file)

        # Validate required columns
        required_columns = {"name", "price", "stock", "category"}
        if not required_columns.issubset(df.columns):
            raise ValueError("Missing required columns in Excel file.")

        for _, row in df.iterrows():
            category, _ = Category.objects.get_or_create(name=row["category"])
            Product.objects.create(
                name=row["name"],
                description=row.get("description", ""),
                price=row["price"],
                stock=row["stock"],
                category=category,
            )
