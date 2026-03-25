# shop-back
## Setup

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

## API Endpoints

- `/api/products/`
- `/api/products/<int:id>/`
- `/api/categories/`
- `/api/categories/<int:id>/`
- `/api/categories/<int:id>/products/`
