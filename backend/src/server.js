// Hotel Management System - Backend Server
// Main entry point for the Node.js/Express application

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Hotel Management System API is running' });
});

// TODO: Add your routes here
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/rooms', require('./routes/roomRoutes'));
// app.use('/api/bookings', require('./routes/bookingRoutes'));
// app.use('/api/guests', require('./routes/guestRoutes'));
// app.use('/api/payments', require('./routes/paymentRoutes'));

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
