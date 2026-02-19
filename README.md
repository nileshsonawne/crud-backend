# 🚀 Employee CRUD Auth Backend API

A secure REST API built using **Node.js, Express 5, MongoDB, and JWT Authentication**.  
This backend handles user authentication and protected employee CRUD operations.

---

## ✨ Features

- User Registration & Login
- JWT Based Authentication
- Protected Routes
- Employee CRUD Operations
- MongoDB Database Integration
- Request Logging (Morgan)
- Proper Error Handling

---

## 🧰 Tech Stack

- Node.js
- Express.js (v5 - ES Modules)
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs Password Hashing
- Morgan Logger
- dotenv
- cors

---

## 📦 Dependencies

```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken morgan
npm install --save-dev nodemon




📁 Project Structure
backend/
│
├── config/
│     └── db.js
│
├── controllers/
│     ├── authController.js
│     └── employeeController.js
│
├── middleware/
│     └── authMiddleware.js
│
├── models/
│     ├── User.js
│     └── Employee.js
│
├── routes/
│     ├── authRoutes.js
│     └── employeeRoutes.js
│
├── server.js
├── package.json
└── .env


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Example MongoDB local:

MONGO_URI=mongodb://127.0.0.1:27017/crud_auth
🚀 Run the Project
1️⃣ Install dependencies
npm install
2️⃣ Start server (Development)
npm run dev
3️⃣ Start server (Production)
npm start
Server will run on:

http://localhost:5000
🔐 Authentication Flow
Register user

Login user → receive JWT Token

Use token in protected routes

Header format:

Authorization: Bearer YOUR_TOKEN
🧪 API Testing (Postman / Thunder Client)
👤 AUTH ROUTES
Register User
POST /api/auth/register
Body (JSON)

{
  "name": "Nilesh",
  "email": "nilesh@gmail.com",
  "password": "123456"
}
Login User
POST /api/auth/login
Body (JSON)

{
  "email": "nilesh@gmail.com",
  "password": "123456"
}
Response:

{
  "token": "JWT_TOKEN"
}
👨‍💼 EMPLOYEE ROUTES (Protected)
⚠️ Add Header

Authorization: Bearer JWT_TOKEN
Get All Employees
GET /api/employees
Get Single Employee
GET /api/employees/:id
Create Employee
POST /api/employees
Body:

{
  "name": "Rahul",
  "position": "Developer",
  "salary": 45000
}
Update Employee
PUT /api/employees/:id
Body:

{
  "name": "Rahul Sharma",
  "position": "Senior Developer",
  "salary": 60000
}
Delete Employee
DELETE /api/employees/:id


app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);


Add header:

Authorization: Bearer TOKEN
MongoDB Connection Error
Check .env file:

MONGO_URI correct?
MongoDB running?
Network access allowed (Atlas)?
JWT Invalid Signature
Change secret or re-login:

JWT_SECRET must be same everywhere


✍️ Author
Nilesh Sonawane


