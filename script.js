const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

if (menuIcon && navLinks) {
  menuIcon.onclick = function() {
    navLinks.classList.toggle("active");
  };
  // Close mobile menu when a nav link is clicked
  navLinks.querySelectorAll("a").forEach(function(a) {
    a.addEventListener("click", function() {
      navLinks.classList.remove("active");
    });
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener("click", function(e) {
    var target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Dynamic year in footer
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();