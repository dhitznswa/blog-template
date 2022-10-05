const sidebartoggle = document.getElementById("sidebartoggel");
const sidebarclose = document.getElementById("sidebarclose");
const sidebar = document.getElementById("sidebar");

sidebartoggle.addEventListener("click", function () {
  sidebar.classList.remove("hidden");
});
sidebarclose.addEventListener("click", function () {
  sidebar.classList.add("hidden");
});

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  if (scroll > 10) {
    document.getElementById("navbar").classList.add("shadow-md");
  } else {
    document.getElementById("navbar").classList.remove("shadow-md");
  }
});
