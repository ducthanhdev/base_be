// helpers/dateHelper.js
module.exports = {
    formatDate: (date) => {
      // Hàm định dạng ngày tháng theo định dạng mong muốn
      return new Date(date).toLocaleDateString();
    },
  };
  