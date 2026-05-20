# 🏨 Hotel Management System

A comprehensive full-stack hotel management system built with **Node.js**, **React**, and **PostgreSQL**. This application helps hotel administrators manage rooms, bookings, guests, and staff efficiently.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Features
- 🛏️ **Room Management** - Add, update, and manage hotel rooms
- 📅 **Booking System** - Create, modify, and cancel bookings
- 👥 **Guest Management** - Maintain guest profiles and history
- 💰 **Billing & Payments** - Invoice generation and payment tracking
- 📊 **Dashboard** - Real-time analytics and occupancy rates
- 👨‍💼 **Staff Management** - Employee information and role management
- 🔐 **Authentication** - Secure login and authorization
- 📱 **Responsive UI** - Mobile-friendly interface

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Redux** - State management
- **Axios** - HTTP client
- **React Router** - Navigation
- **CSS/Bootstrap** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Sequelize** - ORM
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### Tools & Deployment
- **Git & GitHub** - Version control
- **Docker** - Containerization
- **Postman** - API testing

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn
- Git

## 🚀 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/ayushthapa080/hotel-management-system.git
cd hotel-management-system
```

### Step 2: Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your PostgreSQL credentials
DB_HOST=localhost
DB_PORT=5432
DB_NAME=hotel_management
DB_USER=your_username
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
PORT=5000

# Run migrations
npm run migrate

# Seed database (optional)
npm run seed

# Start backend server
npm start
```

### Step 3: Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with API URL
REACT_APP_API_URL=http://localhost:5000/api

# Start React development server
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
hotel-management-system/
├── backend/
│   ├── src/
│   │   ├── config/          # Database and app configuration
│   │   ├── controllers/      # Route controllers
│   │   ├── models/           # Sequelize models
│   │   ├── routes/           # API routes
│   │   ├── middleware/       # Express middleware
│   │   ├── utils/            # Utility functions
│   │   └── server.js         # Main server file
│   ├── tests/                # Unit and integration tests
│   ├── .env.example          # Environment variables template
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page components
│   │   ├── redux/            # Redux store and actions
│   │   ├── services/         # API service calls
│   │   ├── utils/            # Utility functions
│   │   ├── styles/           # CSS files
│   │   ├── App.js            # Main App component
│   │   └── index.js          # Entry point
│   ├── public/               # Static assets
│   ├── .env.example          # Environment variables template
│   ├── package.json
│   └── README.md
├── docker-compose.yml        # Docker compose for local development
├── .gitignore
└── README.md                 # This file
```

## 🔌 API Documentation

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Rooms
- `GET /api/rooms` - Get all rooms
- `GET /api/rooms/:id` - Get room details
- `POST /api/rooms` - Create new room (Admin only)
- `PUT /api/rooms/:id` - Update room (Admin only)
- `DELETE /api/rooms/:id` - Delete room (Admin only)

### Bookings
- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Get booking details
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking

### Guests
- `GET /api/guests` - Get all guests
- `POST /api/guests` - Create new guest
- `GET /api/guests/:id` - Get guest details
- `PUT /api/guests/:id` - Update guest

### Payments
- `GET /api/payments` - Get all payments
- `POST /api/payments` - Create payment
- `GET /api/payments/:id` - Get payment details

## 💾 Database Schema

### Tables
- **users** - System users (admins, staff)
- **guests** - Guest information
- **rooms** - Hotel room details
- **bookings** - Reservation records
- **payments** - Payment transactions
- **staff** - Staff members

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For any questions or suggestions, feel free to reach out:
- Email: ayushthapa.080@kathford.edu.np
- GitHub: [@ayushthapa080](https://github.com/ayushthapa080)

---

**Happy coding! 🚀**