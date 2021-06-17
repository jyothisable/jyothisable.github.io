const menu = document.querySelector('.mobileNav')
const ham = document.querySelector('.ham')
const close = document.querySelector('.fa-close')
const open = document.querySelector('.fa-bars')

ham.onclick = toggle()

function toggle() {
    if (menu.classList.contains("showNav")) {
    menu.classList.remove("showNav");
    close.style.display = "none";
    open.style.display = "block";
    } else {
    menu.classList.add("showMenu");
    close.style.display = "block";
    open.style.display = "none";
    }
}