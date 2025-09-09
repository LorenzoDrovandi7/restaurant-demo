export function initMobileMenu(menuButton, navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  });
}
