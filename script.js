document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("dropdownMenu");
  const menuToggle = document.getElementById("menuToggle");
  menuToggle.addEventListener("click", () => menu.classList.toggle("hidden"));
  menu.addEventListener("click", () => menu.classList.add("hidden"));
});

function checkResize() {
  if (window.innerWidth < 640 && window.location.pathname !== '/m.html') {
    window.location.href = "m.html";
  }
  if (window.innerWidth > 640 && window.location.pathname == '/m.html') {
    window.location.href = "index.html";
  }
}

window.addEventListener('load', checkResize);

window.addEventListener('resize', checkResize);
