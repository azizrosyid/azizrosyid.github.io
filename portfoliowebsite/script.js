document.addEventListener("DOMContentLoaded", function (event) {
  const btnMenu = document.querySelector(".btn-toggle-menu");
  btnMenu.addEventListener("click", function () {
    this.classList.toggle("bg-close");
    document.querySelector(".menu-navbar").classList.toggle("display-on");
  });
  window.onscroll = function () {
    const nav = document.querySelector(".wrap-navbar");
    if (window.pageYOffset > 100) {
      nav.classList.add("bg-grey");
    } else {
      nav.classList.remove("bg-grey");
    }
  };
});
