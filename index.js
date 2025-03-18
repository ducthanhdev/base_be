require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db.js');
const userRoutes = require('./src/routes/userRoutes.js');
const path = require('path');
// const errorHandler = require('./middlewares/errorHandler'); // nếu dùng middleware xử lý lỗi

const app = express();

// Middleware parse JSON
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public'))); // Sử dụng file tĩnh trong thư mục public

// Kết nối đến MongoDB
connectDB();

// Sử dụng các route
app.use('/api/users', userRoutes);

// Sử dụng middleware xử lý lỗi (nếu có)
// app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
