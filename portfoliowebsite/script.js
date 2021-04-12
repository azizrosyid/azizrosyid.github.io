document.addEventListener("DOMContentLoaded", function (event) {
  const btnMenu = document.querySelector(".btn-toggle-menu");
  btnMenu.addEventListener("click", function () {
    this.classList.toggle("bg-close");
    document.querySelector(".menu-navbar").classList.toggle("display-on");
  });
});
