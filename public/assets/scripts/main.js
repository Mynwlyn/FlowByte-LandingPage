document.addEventListener("DOMContentLoaded", () => {
  // Referencias al DOM
  const menuBtn = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const navMenu = document.getElementById("header-nav");
  const navLinks = document.querySelectorAll(".header__nav-link");

  // Función para abrir menú
  const openMenu = () => {
    navMenu.classList.add("active");
    document.body.style.overflow = "hidden"; // Evitar scroll
  };

  // Función para cerrar menú
  const closeMenu = () => {
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto"; // Permitir scroll
  };

  // Event Listeners
  if (menuBtn) menuBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  // Cerrar menú al hacer click en un enlace
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Cerrar menú al hacer click fuera (opcional, mejora UX)
  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Efecto Smooth Scroll para navegadores antiguos que no soporten CSS scroll-behavior
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
