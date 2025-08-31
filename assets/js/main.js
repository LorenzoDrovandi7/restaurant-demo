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

// Gallery modal functions
function openModal(element) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const img = element.querySelector("img");

  modal.style.display = "flex";
  modalImg.src = img.src;
  modalImg.alt = img.alt;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Form submissions
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  // Validation
  if (!data.nombre || !data.email || !data.telefono || !data.fecha || !data.hora || !data.personas) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  // Date validation
  const selectedDate = new Date(data.fecha);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    alert("Por favor, selecciona una fecha futura.");
    return;
  }

  // Monday validation
  if (selectedDate.getDay() === 1) {
    alert("Los lunes permanecemos cerrados. Por favor, selecciona otro día.");
    return;
  }

  // Simulate form submission
  alert(
    `¡Gracias ${data.nombre}! Tu reserva para ${data.personas} persona(s) el ${data.fecha} a las ${data.hora} ha sido enviada. Te contactaremos pronto para confirmar.`
  );

  // Reset form
  this.reset();
});

document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.querySelector('input[type="email"]').value;

  if (!email) {
    alert("Por favor, ingresa un email válido.");
    return;
  }

  alert(`¡Gracias por suscribirte! Recibirás nuestras novedades en ${email}`);
  this.reset();
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

// Set minimum date for reservations (today)
document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("fecha");
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;
});

// Keyboard navigation for modal
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Responsive navigation
window.addEventListener("resize", function () {
  const navLinks = document.querySelector(".nav-links");
  if (window.innerWidth > 768) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});

// Loading animation for menu PDF download
document.querySelector('a[href="#"]').addEventListener("click", function (e) {
  e.preventDefault();
  this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparando descarga...';

  setTimeout(() => {
    this.innerHTML = '<i class="fas fa-download"></i> Descargar Menú Completo PDF';
    alert("Funcionalidad de descarga implementada en versión de producción");
  }, 2000);
});
