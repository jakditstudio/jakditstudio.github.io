// Swiper JS
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    autoHeight: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

//navbar-responsive
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

// ubah tombol ketika di klik
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

document.addEventListener("DOMContentLoaded", function () {
  var dropdownToggles = document.querySelectorAll(".dropdown i.fa-caret-down");

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
      var dropdown = toggle.parentElement.parentElement;
      var dropdownContent = dropdown.querySelector(".dropdown-content");
      dropdownContent.classList.toggle("open");

      if (dropdownContent.classList.contains("open")) {
        dropdownContent.style.height = dropdownContent.scrollHeight + "px";
      } else {
        dropdownContent.style.height = "0";
      }

      event.stopPropagation(); // Untuk mencegah event klik menyebar ke atas
    });
  });

  // Menutup dropdown ketika klik di luar dropdown
  window.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      var openDropdowns = document.querySelectorAll(".dropdown-content.open");
      openDropdowns.forEach(function (dropdownContent) {
        dropdownContent.classList.remove("open");
        dropdownContent.style.height = "0";
      });
    }
  });
});
