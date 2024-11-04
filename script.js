document.addEventListener("DOMContentLoaded", function() {
  const menu = document.getElementById("dropdownMenu");
  const menuToggle = document.getElementById("menuToggle");

  menuToggle.addEventListener("click", toggleMenu);
  menu.addEventListener("click", closeMenu);

  function toggleMenu() {
    menu.classList.toggle("hidden");
  }

  function closeMenu() {
    menu.classList.add("hidden");
  }
});
