window.addEventListener("scroll", function () {
  let header = document.querySelector(".header1");
  header.classList.toggle("rolagem", window.scrollY > 0);
});

const efeitos = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((efects) => {
  efects.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const efeito = document.querySelectorAll(".hiddeny");

const observ = new IntersectionObserver((efects) => {
  efects.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showy");
    } else {
      entry.target.classList.remove("showy");
    }
  });
});

efeitos.forEach((efeitos) => observer.observe(efeitos));
efeito.forEach((efeito) => observ.observe(efeito));

let btnmenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnmenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
