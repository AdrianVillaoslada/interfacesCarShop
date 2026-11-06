document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme === "dark" ? "dark" : "light";
  htmlElement.setAttribute("data-bs-theme", initialTheme);

  const updateThemeToggle = (theme) => {
    if (themeToggle) {
      themeToggle.textContent = theme === "dark" ? "Modo Claro" : "Modo Oscuro";
      themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
  };

  updateThemeToggle(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const newTheme = htmlElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
      htmlElement.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeToggle(newTheme);
    });
  }

  const galleryMain = document.querySelector(".car-gallery-main");
  const galleryButtons = document.querySelectorAll(".car-gallery-thumbnail");

  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedImage = button.dataset.image;
      if (!selectedImage || !galleryMain) return;

      galleryMain.style.backgroundImage = `url('${selectedImage}')`;
      galleryButtons.forEach((item) => item.classList.toggle("active", item === button));
    });
  });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        alert("¡Formulario enviado con éxito!");
      }

      form.classList.add("was-validated");
    }, false);
  }
});