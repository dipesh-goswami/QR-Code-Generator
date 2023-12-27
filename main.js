let inputvalue = document.getElementById("inputvalue");
let imgsrc = document.getElementById("imgsrc");
const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

function generateQR() {
  imgsrc.src = `${api}+inputvalue.value`;
  imgsrc.classList.add("showimg");
}


inputvalue.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    validate(e);
  }
});

function validate(e) {
  generateQR();
}