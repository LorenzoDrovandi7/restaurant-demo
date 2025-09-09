export function initToggleMobileNav(navLinks, breakpoint = 768) {
  if (!navLinks) return;

  function handleResize() {
    if (window.innerWidth > breakpoint) {
      navLinks.classList.add("is-active");
    } else {
      navLinks.classList.remove("is-active");
    }
  }

  window.addEventListener("resize", handleResize);

  handleResize();
}
