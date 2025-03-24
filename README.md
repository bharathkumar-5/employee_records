# 🚀 Employee Management System

Welcome to the **Employee Management System**! This project is a full-stack web application built using **React (Vite) for the frontend** and **Express.js with MongoDB for the backend**. The system allows users to **perform CRUD operations** on employees, implement **authentication**, and manage employee data efficiently.

---

## 🔑 Demo Login Credentials

Use the following credentials to log in as an admin:

- **Email:** admin@gmail.com
- **Password:** admin1

---


## 🛠️ Tech Stack

### Frontend (React + Vite)
- ⚛ **React** - UI Library
- ⚡ **Vite** - Build Tool
- 🎨 **Tailwind CSS** - Styling Framework
- 🔄 **React Router DOM** - Routing
- 📦 **Redux Toolkit** - State Management
- 📡 **Axios** - HTTP Requests
- 📊 **Recharts** - Data Visualization
- 🔔 **Sonner** - Notifications
- ✅ **React Hook Form** - Form Handling
- 🎭 **Zod** - Form Validation
- 📅 **React Day Picker** - Date Picker
- 🔘 **Radix UI Components** - Accessible UI Components

### Backend (Node.js + Express)
- 🖥️ **Node.js** - Runtime Environment
- 🚀 **Express.js** - Backend Framework
- 🔑 **JWT** - Authentication
- 🛢️ **MongoDB & Mongoose** - Database & ORM
- 📤 **Multer + Cloudinary** - File Uploads & Storage
- 🌍 **CORS** - Cross-Origin Requests Handling
- 🔐 **Argon2** - Password Hashing
- 📑 **Dotenv** - Environment Variables

---

## 📷 Home Page Screenshot

![Home Page](./screenshots/home.png)

---

## 📦 Installation & Setup

### Backend Setup

1. Clone the repository and navigate to the backend folder:
   ```sh
   git clone https://github.com/your-repo.git
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

---

## 🏗️ Features

### ✅ Backend Features
- **RESTful API** for employee management
- **JWT Authentication** for secure access
- **File Uploads** using Multer & Cloudinary
- **Search & Pagination** for employee records
- **Role-based Access Control**

### 🎨 Frontend Features
- **Modern UI** built with Tailwind CSS & Radix UI
- **Form Validation** using React Hook Form & Zod
- **State Management** with Redux Toolkit
- **Responsive Design** for all devices
- **Dark Mode Support**

---

## 🚀 Deployment

### Deploy Backend
- Used **Render**
- Setup environment variables in the hosting dashboard
- Deploy using GitHub Actions or manual setup

### Deploy Frontend
- Used **Vercel**
- Connect the repo and deploy with a single click

---

## 📜 API Endpoints

### 🔐 Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### 👤 Employee Management
- `GET /api/employees` - Get all employees
- `POST /api/employees` - Create an employee
- `PUT /api/employees/:id` - Update an employee
- `DELETE /api/employees/:id` - Delete an employee

---

## 📄 Developer
This project is developed by **Bharath Kumar**.

---

## 💡 Acknowledgments
Special thanks to all open-source libraries and frameworks that made this project possible! 🎉

