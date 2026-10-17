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
const publicPhone = document.querySelector("#publicPhone");
const mobileContactBar = document.querySelector("#mobileContactBar");
const mobileCall = document.querySelector("#mobileCall");
const publicPhoneHref = publicPhone?.getAttribute("href") ?? "";
const publicNumber = publicPhoneHref.match(/^tel:\+?(\d{8,15})$/)?.[1] ?? "";

if (publicNumber) {
  const callHref = `tel:+${publicNumber}`;
  const message = encodeURIComponent("Hola, vi la página de Pedro y quiero consultar por un trabajo.");
  const whatsappHref = `https://wa.me/${publicNumber}?text=${message}`;

  if (publicPhone) publicPhone.href = callHref;
  if (mobileCall) mobileCall.href = callHref;
  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = whatsappHref;
    link.hidden = false;
  });
  if (mobileContactBar && mobileCall) mobileContactBar.hidden = false;
  if (contactAction && contactStatus) contactStatus.textContent = "Escribí para contar qué trabajo necesitás y en qué zona.";
}
