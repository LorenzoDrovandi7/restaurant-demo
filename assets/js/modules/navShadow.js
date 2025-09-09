export function initNavShadow(header, scrollLimit = 100) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollLimit) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
