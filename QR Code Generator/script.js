const qrCodeSettings = document.getElementById("qrcode-settings"),
  qrcodeContainer = document.getElementById("qrcode"),
  generateBtn = document.getElementById("generate-btn"),
  downloadBtn = document.getElementById("download-btn"),
  downloadBtnContainer = document.querySelector(".download-btn-container");

qrCodeSettings.onsubmit = function (e) {
  e.preventDefault();
  qrcodeContainer.innerHTML = "";
  const formData = new FormData(qrCodeSettings, generateBtn);
  const userInputs = {};
  for (const [key, value] of formData) {
    userInputs[key] = value;
  }

  const settings = {
    text: userInputs.text,
    width: userInputs.qrcodeWidth,
    height: userInputs.qrcodeWidth,
    typeNumber: 4,
    colorDark: userInputs.txtColor,
    colorLight: userInputs.bgColor,
    quietZone: 10,
    quietZoneColor: userInputs.bgColor,
  };

  if (userInputs.customLogo.name) {
    settings.logo = URL.createObjectURL(userInputs.customLogo);
    settings.logoBackgroundColor = userInputs.logoBg;
    settings.logoBackgroundTransparent = userInputs.isTransparent;
    settings.logoWidth = userInputs.logoWidth;
    settings.logoHeight = userInputs.logoHeight;
  }
  console.log("user inputs: ", userInputs, settings);
  const qrcode_ = new QRCode(qrcodeContainer, settings);
  downloadBtnContainer.classList.remove("hidden");
};
downloadBtn.onclick = function () {
  const qrcodeImage = document.querySelector("#qrcode canvas");
  const data = qrcodeImage.toDataURL("image/png"),
    aEl = document.createElement("a");
  aEl.href = data;
  aEl.download = new Date().toLocaleDateString() + ".png";
  aEl.click();
  // Reset the form
  qrCodeSettings.reset();
  // Optionally, hide the download button after reset
  downloadBtnContainer.classList.add("hidden");
  // Clear the QR code container
  qrcodeContainer.innerHTML = "";
};

//all navbar search box
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});
//sidebar open close js code
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", () => {
  navLinks.style.left = "0";
});
closeOpenBtn.addEventListener("click", () => {
  navLinks.style.left = "-100%";
});
// sidebar sub menu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show1");
});
