// controllers/userController.js
const User = require('../models/userModel');
const { createUserDto } = require('../dtos/user.dto');
const logger = require('../utils/logger');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    logger.log('Lấy danh sách user thành công');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    // Sử dụng DTO để định dạng dữ liệu đầu vào
    const userData = createUserDto(req.body);
    const user = new User(userData);
    const newUser = await user.save();
    logger.log(`User ${newUser.email} đã được tạo`);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
