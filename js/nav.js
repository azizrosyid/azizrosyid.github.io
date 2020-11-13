window.addEventListener("DOMContentLoaded", (event) => {
  const elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);

  loadNav();
  function loadNav() {
    fetch("nav.html")
      .then((result) => result.text())
      .then((result) => {
        document.querySelectorAll(".nav-wrapper ul").forEach((nav) => {
          nav.innerHTML = result;
        });
        document.querySelectorAll(".sidenav a,.topnav a").forEach((elem) => {
          elem.addEventListener("click", (event) => {
            const sidenav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sidenav).close();

            const page = event.target.getAttribute("href").substr(1);
            loadPage(page);
          });
        });
      });
  }

  const page = window.location.hash.substr(1) || "home";
  loadPage(page);

  function loadPage(page) {
    const { id } = extractHashUrl(page.substr(5));
    if (id) {
      getDetailTeam(id);
      return;
    }
    fetch(`pages/${page}.html`)
      .then((result) => result.text())
      .then((result) => {
        const root = document.querySelector("#root");
        root.innerHTML = result;

        if (page == "home") getStandingGroup();
        if (page == "saved") getSavedTeam();
        if (page == "team") getListTeam();
      })
      .catch((err) => console.log(`Error : ${err}`));
  }
});
