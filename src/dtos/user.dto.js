// dtos/user.dto.js
module.exports = {
    createUserDto: (data) => {
      return {
        name: data.name,
        email: data.email,
        // Có thể thêm xử lý chuyển đổi dữ liệu nếu cần
      };
    },
  };
  