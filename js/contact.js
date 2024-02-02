function testEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
// function submitForm() {
//   var name = document.getElementById("nameInput").value;
//   var email = document.getElementById("emailInput").value;
//   var name = document.getElementById("phoneInput").value;
//   var email = document.getElementById("addressInput").value;
//   var message = document.getElementById("messageInput").value;
//   if (name === "" || email === "" || message === "" || phone === "" || address === "") {
//     document.getElementById("error").textContent = "Vui lòng điền đầy đủ thông tin";
//     document.getElementById("error").style.display = "block";
//     document.getElementById("Message").style.display = "none";
//   } else if (!testEmail(email)) {
//     document.getElementById("error").textContent = "Vui lòng nhập đúng định dạng email";
//     document.getElementById("error").style.display = "block";
//     document.getElementById("Message").style.display = "none";
//   } else {
//     document.getElementById("Message").style.display = "block";
//     document.getElementById("error").style.display = "none";
//     document.getElementById("nameInput").value = "";
//     document.getElementById("emailInput").value = "";
//     document.getElementById("messageInput").value = "";
//     setTimeout(function () {
//       document.getElementById("Message").style.display = "none";
//     }, 2000);
//   }
// }
function isPhoneNumberValid(phoneNumber) {
  // Kiểm tra xem phoneNumber có phải là số hay không
  return !isNaN(phoneNumber);
}

function submitForm() {
  // Lấy giá trị từ các ô nhập
  var nameInput = document.getElementById("nameInput").value;
  var phoneInput = document.getElementById("phoneInput").value;
  var addressInput = document.getElementById("addressInput").value;
  var emailInput = document.getElementById("emailInput").value;
  var messageInput = document.getElementById("messageInput").value;

  // Kiểm tra nếu có bất kỳ ô nhập nào trống
  if (!nameInput || !phoneInput || !addressInput || !emailInput || !messageInput) {
      // Hiển thị thông báo lỗi về việc nhập thiếu thông tin
      document.getElementById("error").innerText = "Bạn nhập thiếu thông tin";
      document.getElementById("error").style.display = "block";
      document.getElementById("Message").style.display = "none";
  } else {
      // Kiểm tra định dạng email
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      // Kiểm tra phoneInput có phải là số hay không
      if (isPhoneNumberValid(phoneInput) && emailRegex.test(emailInput)) {
          // Hiển thị thông báo thành công và ẩn thông báo lỗi
          document.getElementById("Message").innerText = "Bạn đã gửi thành công";
          document.getElementById("Message").style.display = "block";
          document.getElementById("error").style.display = "none";
      } else {
        // Kiểm tra định dạng email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isEmailValid = emailRegex.test(emailInput);
    
        // Kiểm tra định dạng số điện thoại
        var isPhoneValid = isPhoneNumberValid(phoneInput);
    
        // Hiển thị thông báo lỗi cụ thể
        if (!isEmailValid && !isPhoneValid) {
            document.getElementById("error").innerText = "Vui lòng nhập đúng định dạng email và số điện thoại";
        } else if (!isEmailValid) {
            document.getElementById("error").innerText = "Vui lòng nhập đúng định dạng email";
        } else if (!isPhoneValid) {
            document.getElementById("error").innerText = "Vui lòng nhập đúng định dạng số điện thoại";
        }
    
        // Hiển thị thông báo lỗi và ẩn thông báo thành công
        document.getElementById("error").style.display = "block";
        document.getElementById("Message").style.display = "none";
    }
  }
}

///// bars
function myD() {
  var x = document.getElementById("menu");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}
function myX() {
  var x = document.getElementById("menu");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}