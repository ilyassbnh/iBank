const menuButton = document.getElementById("toggle-menu");
const navbar = document.getElementById("nav-wrapper");
let hidden = true;

menuButton.addEventListener("click", () => {
  if (hidden) {
    navbar.style.height = "fit-content";
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
    navbar.style.height = "0";
  }
  hidden = !hidden;
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth > 800) {
    navbar.style.display = "flex";
  }else {
    navbar.style.display = "none";
  }
});
