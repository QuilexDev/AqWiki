document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".main-nav-link");
  const submenus = document.querySelectorAll(".submenu");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      submenus.forEach((submenu) => {
        submenu.classList.remove("active");
      });

      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });

      const submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains("submenu")) {
        submenu.classList.add("active");
        this.classList.add("active");
      }
    });
  });

  // Cerrar submenú al hacer clic fuera de él
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".main-nav-list > li")) {
      submenus.forEach((submenu) => {
        submenu.classList.remove("active");
      });

      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
    }
  });

  submenus.forEach((submenu) => {
    submenu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
});
