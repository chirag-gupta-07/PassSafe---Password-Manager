# 🔒 Ventora - Password Manager

Ventora is a modern, responsive, and secure Password Manager application built with a React frontend and an Express/Node.js backend, backed by MongoDB for persistent credential storage.

---

## 🚀 Features

- **Store Credentials**: Easily add and manage website URLs, usernames, and passwords.
- **Copy to Clipboard**: Quick copy actions for passwords and usernames with real-time toast feedback.
- **Edit & Delete**: Seamless update and removal of saved password entries.
- **Toggle Visibility**: Securely view or hide passwords using the visibility toggle.
- **Responsive Design**: Clean and interactive UI built using Tailwind CSS v4.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 (via Vite)
- **Styling**: Tailwind CSS v4
- **Notifications**: React-Toastify
- **Icons**: Custom PNG assets

### Backend
- **Framework**: Node.js & Express
- **Database Driver**: MongoDB Node.js Driver
- **Middleware**: CORS, Express JSON Parser
- **Configuration**: Dotenv for environment variables

---

## 📁 Project Structure

```text
Password Manager/
├── backend/
│   ├── App.js               # Express Server & DB Connection
│   ├── .env                 # Environment variables (DB URI, port)
│   ├── package.json         # Backend dependencies & scripts
│   └── node_modules/
├── frontend/
│   ├── src/                 # React source code
│   │   ├── components/      # Navbar, Entry, and layout components
│   │   ├── App.jsx          # Main application component
│   │   └── index.css        # Global CSS with Tailwind v4 directives
│   ├── package.json         # Frontend dependencies & Vite configuration
│   └── vite.config.js       # Vite bundler configuration
└── README.md                # Project documentation
```

---

## 🔧 Installation & Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed on your system.

### 2. Backend Setup
1. Open your terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install the required Node dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory (see [Environment Configuration](#env-config) below).
4. Run the Express server:
   ```bash
   node App.js
   ```
   *The server will start on [http://localhost:3000](http://localhost:3000).*

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch the Vite development server:
   ```bash
   npm run dev
   ```
   *Open [http://localhost:5173](http://localhost:5173) in your browser to access the dashboard.*

---

## <a name="env-config"></a>⚙️ Environment Configuration

Create a file named `.env` in the `backend/` directory and configure the following variables:

```ini
# Server Configuration
PORT=3000

# MongoDB Configuration
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?appName=<appName>
DB_NAME=passwords
```

---

## ⚠️ Troubleshooting: Connection Issues on Windows

If you run the backend on Windows and receive the following error:
```text
Error: querySrv ECONNREFUSED _mongodb._tcp.ventora.enos0wp.mongodb.net
```
This is a **DNS Resolution Issue** where Node.js fails to query MongoDB SRV records via your default local/ISP DNS.

### Solution:
Force Node.js to use public DNS resolvers (like Cloudflare or Google) at the very top of `backend/App.js` before initializing the database connection:

```javascript
// Add this line at the absolute top of App.js
require('node:dns/promises').setServers(["1.1.1.1", "8.8.8.8"]);
```
