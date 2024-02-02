var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
function toggleReadMore() {
    var longText = document.getElementById('longText');
    var readMoreBtn = document.getElementById('readMoreBtn');

    if (longText.style.maxHeight === 'none' || longText.style.maxHeight === '') {
        longText.style.maxHeight = '95px';
        readMoreBtn.innerHTML = 'Xem thêm';
    } else {
        longText.style.maxHeight = 'none';
        readMoreBtn.innerHTML = 'Thu gọn';
    }
}
// ---------------
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

  //----------
  