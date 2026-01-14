Below is a clean, professional **README.md** you can use for your e‑commerce project **Shopora**.  
It’s simple enough for your first version, but structured so you can expand the project later as you add more features.

---

# **Shopora – Simple E‑Commerce Store**

Shopora is a minimal, modern e‑commerce web application built with **Next.js (App Router)** and **Express.js**.  
The goal of this project is to start with a simple product catalog and gradually expand it into a full-featured online store.

---

## **🚀 Features (Current Version)**

- **Landing Page** with 7 sections  
- **Product List Page** (public)  
- **Product Details Page** (public)  
- **Mock Login System** using hardcoded credentials  
- **Cookie‑based Authentication**  
- **Protected Add Item Page** (only logged‑in users can access)  
- **Express.js API** for product data  
- **Clean folder structure** for easy scaling  

---

## **🛠️ Tech Stack**

### **Frontend**
- Next.js 15/16 (App Router)
- React
- Tailwind CSS (or your chosen styling method)
- Cookies for authentication

### **Backend**
- Express.js
- Node.js
- JSON / In‑memory data (can be replaced with a real database later)

---

## **📁 Project Structure**

### **Frontend (Next.js)**
```
/frontend
 ├── app
 │    ├── (public)
 │    │     ├── page.jsx
 │    │     ├── items/page.jsx
 │    │     ├── items/[id]/page.jsx
 │    │     └── login/page.jsx
 │    ├── (protected)/add-item/page.jsx
 │    ├── layout.jsx
 │    └── globals.css
 ├── components
 ├── lib
 ├── public
 └── package.json
```

### **Backend (Express.js)**
```
/backend
 ├── src
 │    ├── server.js
 │    ├── routes/items.js
 │    ├── controllers/itemsController.js
 │    └── models/itemsModel.js
 ├── data/items.json
 └── package.json
```

---

## **🔐 Authentication**

Shopora uses a **simple mock login** system:

- Hardcoded email & password  
- On successful login, a cookie is stored  
- Protected routes check this cookie before allowing access  
- Unauthenticated users are redirected to the login page  

---

## **📦 API Endpoints (Express.js)**

| Method | Endpoint          | Description               |
|--------|-------------------|---------------------------|
| GET    | `/api/items`      | Get all products          |
| GET    | `/api/items/:id`  | Get single product        |
| POST   | `/api/items`      | Add new product (protected) |

---

## **🧪 How to Run the Project**

### **1. Clone the repository**
```
git clone https://github.com/your-username/shopora.git
```

### **2. Install frontend dependencies**
```
cd frontend
npm install
npm run dev
```

### **3. Install backend dependencies**
```
cd backend
npm install
npm start
```

---

## **🔑 Login Credentials**

Use the following credentials to log in:

- **Email:** `test@shopora.com`  
- **Password:** `password123`

---

## **📌 Routes Summary**

| Route | Description |
|-------|-------------|
| `/` | Landing Page |
| `/items` | All products |
| `/items/[id]` | Product details |
| `/login` | Login page |
| `/add-item` | Add new product (protected) |

---

## **📘 Future Enhancements**

- Real database (MongoDB / PostgreSQL)
- User accounts & profiles
- Shopping cart system
- Wishlist
- Search & filtering
- Stripe payment integration
- Admin dashboard

---

## **📄 License**

This project is for learning and personal development purposes.

---