const menu = document.querySelector(".menu");
const ham = document.querySelector('.ham')
const closeIcon = document.querySelector('.fa-close')
const openIcon = document.querySelector('.fa-bars')

ham.onclick = toggleMenu

function toggleMenu(){
    if (menu.classList.contains("showNav")) {
    menu.classList.remove("showNav");
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
    } else {
    menu.classList.add("showNav");
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
    }
}

const menuLinks = document.querySelectorAll(".menu>li");

menuLinks.forEach(
  (menuLink) => (menuLink.onclick = toggleMenu)
);

