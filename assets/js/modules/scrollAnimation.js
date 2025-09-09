export function initScrollAnimation(elements, offset = 150) {
  function animateOnScroll() {
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < window.innerHeight - offset) {
        element.classList.add("visible");
      }
    });
  }

  elements.forEach((element) => {
    element.classList.add("hidden-on-load");
  });

  window.addEventListener("scroll", animateOnScroll);
}
