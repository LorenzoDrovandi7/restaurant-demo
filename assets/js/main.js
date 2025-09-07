// Mobile menu toggle
document.querySelector(".mobile-menu").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
    header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "none";
  }
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".menu-category, .review-card, .gallery-item");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Initialize animations
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".menu-category, .review-card, .gallery-item");
  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });
});

window.addEventListener("scroll", animateOnScroll);

// Responsive navigation
window.addEventListener("resize", function () {
  const navLinks = document.querySelector(".nav-links");
  if (window.innerWidth > 768) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});
