# 🐾 Gentle Paws - Pet Food E-Commerce

## 📌 Project Overview
**Gentle Paws** is a pet food e-commerce platform that allows users to browse and purchase pet food products online. The project is built using **React (Vite) + Tailwind CSS** for the frontend and **Django + Django REST Framework (DRF) with JWT authentication** for the backend.

## 🎯 Features
### **Frontend (React + Vite + Tailwind CSS)**
- 🛒 **Modern UI:** A sleek, responsive user interface using Tailwind CSS.
- 🔐 **User Authentication:** JWT-based login and signup.
- 📦 **Product Listing:** Fetches product data from the backend via REST API.
- 🏷️ **Category Filtering:** Users can filter pet food based on pet type, brand, and price.
- 💳 **Cart & Checkout:** Users can add products to the cart and proceed with checkout.

### **Backend (Django + DRF)**
- 🔑 **JWT Authentication:** Secure login and user session management.
- 📡 **REST API:** Provides endpoints for product management, user authentication, and order processing.
- 📊 **Admin Panel:** Built using Django admin with support for bulk product uploads (Excel/JSON).
- 📥 **Django Import-Export:** Allows bulk product import/export via admin panel.
- 🎨 **Custom Admin Theme:** Django Grappelli for a modern admin panel design.

## 🏗️ Tech Stack
| Component   | Technology |
|------------|------------|
| **Frontend** | React (Vite) + Tailwind CSS |
| **Backend** | Django + Django REST Framework |
| **Database** | PostgreSQL / SQLite |
| **Authentication** | JWT (JSON Web Token) |
| **Admin Panel** | Django Grappelli + Django Import-Export |

## 🚀 Setup & Installation
### **1️⃣ Clone the Repository**
```sh
 git clone https://github.com/yourusername/gentle-paws.git
 cd gentle-paws
```

### **2️⃣ Backend Setup (Django + DRF)**
```sh
cd backend
python -m venv env  # Create a virtual environment
source env/bin/activate  # Activate the virtual environment (Mac/Linux)
env\Scripts\activate  # Activate the virtual environment (Windows)
pip install -r requirements.txt  # Install dependencies
python manage.py migrate  # Apply migrations
python manage.py createsuperuser  # Create an admin user
python manage.py runserver  # Run the backend server
```

### **3️⃣ Frontend Setup (React + Vite)**
```sh
cd frontend
npm install  # Install dependencies
npm run dev  # Run the development server
```

## 🔗 API Endpoints
### **Authentication**
- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - User login (returns JWT token)
- `GET /api/auth/user/` - Get authenticated user details

### **Products**
- `GET /api/products/` - Fetch all products
- `GET /api/products/<id>/` - Fetch product details
- `POST /api/products/` - Add a new product (Admin only)
- `PUT /api/products/<id>/` - Update product (Admin only)
- `DELETE /api/products/<id>/` - Delete product (Admin only)

### **Orders**
- `POST /api/orders/` - Place an order
- `GET /api/orders/` - View user orders
- `GET /api/orders/<id>/` - Get order details

## 📸 Screenshots
### **Admin Panel (Gentle Paws Custom Theme)**
![Admin Panel](https://yourimageurl.com/admin.png)

### **Product Page**
![Product Page](https://yourimageurl.com/product.png)

## 🛠️ Customization
- **Admin Panel Theme:** You can modify the `settings.py` to enable/disable Grappelli.
- **Product Import:** Ensure `django-import-export` is installed and configured in `admin.py`.

## 📜 License
This project is licensed under the **MIT License**.

## 💬 Feedback & Contributions
If you have any suggestions or want to contribute, feel free to open an issue or a pull request.

🚀 **Happy Coding!**

