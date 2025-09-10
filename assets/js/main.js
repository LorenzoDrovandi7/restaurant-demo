import { initMobileMenu } from "../js/modules/menuManager.js";
import { initSmoothScroll } from "../js/modules/smoothScroll.js";
import { initNavShadow } from "../js/modules/navShadow.js";
import { initScrollAnimation } from "../js/modules/scrollAnimation.js";
import { initToggleMobileNav } from "../js/modules/toggleMobileNav.js";
import { initReservationForm } from "../js/modules/reservation.js";

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

document.addEventListener("DOMContentLoaded", () => {
  initReservationForm();
});
