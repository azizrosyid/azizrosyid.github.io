document.addEventListener("DOMContentLoaded", function (event) {
  // change icon in navbar, hamburger to close icon viceversa
  const btnMenu = document.querySelector(".btn-toggle-menu");
  btnMenu.addEventListener("click", function () {
    this.classList.toggle("bg-close");
    document.querySelector(".menu-navbar ul").classList.toggle("display-on");
  });

  // change color in navbar from transparent to grey
  window.onscroll = function () {
    const wrapNav = document.querySelector(".wrap-navbar");
    if (window.pageYOffset > 100) {
      wrapNav.classList.add("bg-grey");
    } else {
      wrapNav.classList.remove("bg-grey");
    }
  };

  // get all link in navbar
  const linkNavbar = document.querySelectorAll(".menu-navbar ul a");

  // iterate each link
  linkNavbar.forEach((link) => {
    // add click event in link
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const classLink = this.getAttribute("data-target"); // get data target
      scrollToElement(classLink);
    });
  });

  const form = document.querySelector(".contact-form");
  const divStatus = document.querySelector(".status-form");
  const status = {
    success: "Your message has been sent successfully!",
    failed: "Your message has failed to be sent!",
  };
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          divStatus.style.display = "block";
          divStatus.innerText = status.success;
          form.style.display = "none";
        } else {
          throw new Exception();
        }
      })
      .catch((error) => {
        divStatus.style.display = "block";
        divStatus.innerText = status.failed;
        setTimeout(() => {
        divStatus.style.display = "none";
        }, 3000);
      });
  });
});

// function to scroll to element with selector css
function scrollToElement(selectorCSS) {
  const verticalCoordinate =
    document.querySelector(`${selectorCSS}`).offsetTop - 100;
  window.scrollTo(0, verticalCoordinate);
}
