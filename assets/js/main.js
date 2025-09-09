import { initMobileMenu } from "../js/modules/menuManager.js";
import { initSmoothScroll } from "../js/modules/smoothScroll.js";
import { initNavShadow } from "../js/modules/navShadow.js";
import { initScrollAnimation } from "../js/modules/scrollAnimation.js";
import { initToggleMobileNav } from "../js/modules/toggleMobileNav.js";
import { getFormData } from "../js/modules/FormDataService.js";
import { sendReservation } from "../js/modules/ReservationService.js";
import { showMessage } from "../js/modules/UIHandler.js";

const menuButton = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
const anchors = document.querySelectorAll('a[href^="#"]');
const header = document.querySelector(".header");
const animatedElements = document.querySelectorAll(".menu-category, .review-card, .gallery-item");

initMobileMenu(menuButton, navLinks);
initSmoothScroll(anchors);
initNavShadow(header);
initScrollAnimation(animatedElements);
initToggleMobileNav(navLinks, 768);

const form = document.getElementById("reservationForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = getFormData(form);

  try {
    const res = await sendReservation(data);
    showMessage(res.message);
    form.reset();
  } catch (err) {
    showMessage("Hubo un error enviando la reserva.");
    console.error(err);
  }
});
