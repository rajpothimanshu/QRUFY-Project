# 🚀 Full Stack Developer Assignment  
**Orufy Technologies Pvt. Ltd.**

This repository contains a **full-stack web application** developed as part of the Full Stack Developer assignment.  
The project follows best practices for **folder structure, code quality, responsiveness, and documentation**.

---

## 📁 Project Folder Structure

project-root/
│
├── client/ # Frontend (React)
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
│
├── server/ # Backend (Node.js + Express)
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── config/
│ ├── middleware/
│ ├── server.js
│ ├── package.json
│ └── .env.example
│
├── README.md # Project Documentation
└── .gitignore



✔ Clear separation between **client** and **server**  
✔ Modular & scalable structure

---

## 🛠 Technologies Used

### Frontend
- React
- Vite
- Tailwind CSS / CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## ⚙️ Environment Variables

Create a `.env` file inside the **server/** directory.

PORT=5000
MONGO_URI=mongodb+srv://kallurajput482_db_user:vUlXcO0wbFQqLPA7@cluster0.w2njq50.mongodb.net/?appName=Cluster0


A reference file `.env.example` is included in the server folder.

---

## ▶️ How to Run the Backend

```bash
cd server
npm install
npm run dev
Backend server will start on:

arduino
Copy code
http://localhost:5000
▶️ How to Run the Frontend
bash
Copy code
cd client
npm install
npm run dev
Frontend application will run on:

arduino
Copy code
http://localhost:5173


🧾 Git Usage

Clean and meaningful commit messages

Well-documented code

Organized repository structure