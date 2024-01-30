function testEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function submitForm() {
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var message = document.getElementById("messageInput").value;
  if (name === "" || email === "" || message === "") {
      document.getElementById("error").textContent = "Vui lòng điền đầy đủ thông tin";
      document.getElementById("error").style.display = "block";
      document.getElementById("Message").style.display = "none";
  } else if (!testEmail(email)) {
      document.getElementById("error").textContent = "Vui lòng nhập đúng định dạng email";
      document.getElementById("error").style.display = "block";
      document.getElementById("Message").style.display = "none";
  } else {
      document.getElementById("Message").style.display = "block";
      document.getElementById("error").style.display = "none";
      document.getElementById("nameInput").value = "";
      document.getElementById("emailInput").value = "";
      document.getElementById("messageInput").value = "";
      setTimeout(function() {
          document.getElementById("Message").style.display = "none";
      }, 2000);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var mymap = L.map('map').setView([21.0285, 105.8542], 13); // Đặt tọa độ ban đầu và mức zoom

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
  }).addTo(mymap);

  var marker = L.marker([21.0285, 105.8542]).addTo(mymap); // Tạo điểm đánh dấu
  marker.bindPopup("<b>Hello!</b><br>This is a sample popup.").openPopup(); // Thêm thông báo mở rộng khi nhấp vào điểm đánh dấu
});