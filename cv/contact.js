document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Ngăn chặn việc gửi biểu mẫu mặc định
    event.preventDefault();
  
    // Kiểm tra tính hợp lệ của email
    var emailInput = document.getElementById("email");
    if (!isValidEmail(emailInput.value)) {
      alert("Invalid email address. Please enter a valid email.");
      return;
    }
  
    // Gửi biểu mẫu nếu mọi thứ hợp lệ
    alert("Form submitted successfully!");
    // Thêm logic xử lý việc gửi biểu mẫu đến máy chủ (backend) ở đây nếu cần
  });
  
  // Hàm kiểm tra tính hợp lệ của email
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }