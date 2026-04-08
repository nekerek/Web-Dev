from decimal import Decimal

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

from api.models import Category, Product


class Command(BaseCommand):
    help = "Create a default superuser and seed 4 categories with 20 products."

    def handle(self, *args, **options):
        self._create_superuser()
        self._seed_products()
        self.stdout.write(self.style.SUCCESS("Seed complete: 4 categories, 20 products."))

    def _create_superuser(self):
        user_model = get_user_model()
        username = "admin"
        email = "admin@example.com"
        password = "admin12345"

        if user_model.objects.filter(username=username).exists():
            self.stdout.write("Superuser already exists: admin")
            return

        user_model.objects.create_superuser(
            username=username,
            email=email,
            password=password,
        )
        self.stdout.write("Created superuser: admin / admin12345")

    def _seed_products(self):
        Product.objects.all().delete()
        Category.objects.all().delete()

        categories = [
            "Electronics",
            "Clothing",
            "Books",
            "Home & Kitchen",
        ]

        created_categories = {
            category_name: Category.objects.create(name=category_name)
            for category_name in categories
        }

        products = [
            ("Wireless Mouse", "Electronics", Decimal("19.99")),
            ("Bluetooth Headphones", "Electronics", Decimal("49.99")),
            ("Mechanical Keyboard", "Electronics", Decimal("79.99")),
            ("USB-C Charger", "Electronics", Decimal("24.99")),
            ("Smart Watch", "Electronics", Decimal("99.99")),
            ("Basic T-Shirt", "Clothing", Decimal("12.99")),
            ("Blue Jeans", "Clothing", Decimal("39.99")),
            ("Hoodie", "Clothing", Decimal("44.99")),
            ("Running Shoes", "Clothing", Decimal("59.99")),
            ("Winter Jacket", "Clothing", Decimal("89.99")),
            ("Python Basics", "Books", Decimal("14.99")),
            ("Django for Beginners", "Books", Decimal("24.99")),
            ("Clean Code", "Books", Decimal("29.99")),
            ("Data Structures", "Books", Decimal("21.99")),
            ("Algorithms Handbook", "Books", Decimal("26.99")),
            ("Coffee Mug", "Home & Kitchen", Decimal("8.99")),
            ("Desk Lamp", "Home & Kitchen", Decimal("18.99")),
            ("Water Bottle", "Home & Kitchen", Decimal("11.99")),
            ("Storage Box", "Home & Kitchen", Decimal("16.99")),
            ("Kitchen Knife Set", "Home & Kitchen", Decimal("34.99")),
        ]

        for idx, (name, category_name, price) in enumerate(products, start=1):
            Product.objects.create(
                name=name,
                price=float(price),
                description=f"{name} description",
                count=idx + 10,
                is_active=True,
                category=created_categories[category_name],
            )
