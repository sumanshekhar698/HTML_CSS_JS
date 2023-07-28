let qrInput = document.getElementById("qr-input");
let imgBox = document.getElementById("img-box");
let qrImg = document.getElementById("qr-img");
function generateQR() {
  if (qrInput.value.length == 0) {
    qrInput.classList.add("error-shake");
    imgBox.style.display = "none";
    qrInput.classList.remove("show-img");

    setTimeout(() => {
      qrInput.classList.remove("error-shake");
    }, 1000);
    // alert("Enter some text");
  } else {
    
    qrImg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrInput.value;
    imgBox.style.display = "block";
    imgBox.classList.add("show-img");
  }
}
