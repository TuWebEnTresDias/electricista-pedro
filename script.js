// Configure only a business contact that Pedro has approved for public display.
const SITE_CONFIG = {
  publicWhatsAppE164: "5491130805394",
};

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

if (menuToggle && mainNav) {
  const setMenuOpen = (open) => {
    mainNav.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.classList.toggle("menu-open", open);
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  window.matchMedia("(min-width: 960px)").addEventListener("change", (event) => {
    if (event.matches) setMenuOpen(false);
  });
}

const contactAction = document.querySelector("#contactAction");
const contactStatus = document.querySelector("#contact-status");
const publicNumber = String(SITE_CONFIG.publicWhatsAppE164).replace(/\D/g, "");

if (contactAction && contactStatus && /^\d{8,15}$/.test(publicNumber)) {
  const message = encodeURIComponent("Hola, vi la página de Pedro y quiero consultar por un trabajo.");
  contactAction.href = `https://wa.me/${publicNumber}?text=${message}`;
  contactAction.hidden = false;
  contactStatus.textContent = "Escribí para contar qué trabajo necesitás y en qué zona.";
}
