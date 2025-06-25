# ☕ Coffee Store - Server Side

This is the **server-side API** for the Coffee Store application. It’s built using Node.js, Express, and MongoDB, and provides RESTful endpoints to manage coffee products and user data.

---

## 🌐 Live Server

🔗 Hosted on: _[[Vercel](https://coffee-store-server-mu-rosy.vercel.app)]_

---

## 🛠️ Technologies Used

- ⚙️ **Node.js** – JavaScript runtime
- 🚂 **Express.js** – Web framework for Node
- 🌍 **MongoDB** – NoSQL database for storing coffee & user data
- 🔐 **dotenv** – Load environment variables securely
- 🔗 **CORS** – Handle cross-origin resource sharing
- 📦 **MongoDB Node.js Driver** – For database operations

---

## 📦 NPM Packages

These are packages required for the server to run:

- **express** – Fast, unopinionated, minimalist web framework
- **cors** – Enable Cross-Origin Resource Sharing
- **mongodb** – Official MongoDB driver
- **dotenv** – Environment variable management

---

## 📁 API Endpoints

### ☕ Coffee Routes

| Method | Route              | Description                    |
|--------|-------------------|--------------------------------|
| GET    | `/coffees`         | Get all coffee items           |
| GET    | `/coffees/:id`     | Get a single coffee by ID      |
| POST   | `/coffees`         | Add a new coffee               |
| PUT    | `/coffees/:id`     | Update coffee by ID            |
| DELETE | `/coffees/:id`     | Delete coffee by ID            |

### 👤 User Routes

| Method | Route     | Description              |
|--------|-----------|--------------------------|
| GET    | `/users`   | Get all users            |
| POST   | `/users`   | Add a new user           |

---

## 🔐 Environment Variables

Create a `.env` file in the root of the project and add:

