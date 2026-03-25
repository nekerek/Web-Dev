from django.http import JsonResponse

from .models import Category, Product


def products_list(request):
    products = Product.objects.all().order_by('price')[::-1]
    return JsonResponse([product.to_dict() for product in products], safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)
    return JsonResponse(product.to_dict())


def categories_list(request):
    categories = Category.objects.all()
    return JsonResponse([category.to_dict() for category in categories], safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)
    return JsonResponse(category.to_dict())


def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)
    return JsonResponse([product.to_dict() for product in category.products.all()], safe=False)
