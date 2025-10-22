const menuIcon = document.getElementById("menu-icon");
if (menuIcon) {
  menuIcon.onclick = function() {
    document.getElementById("nav-links").classList.toggle("active");
  };
}