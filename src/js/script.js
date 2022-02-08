const menuExtender = document.querySelector("a.navbar__menu-extender.menu-extender");
const menuBlock = document.querySelector("ul.navbar__menu.menu");
let isMenuExtended = false;

function changeMenuStatus(isMenuExtended) {
    if (isMenuExtended) {
        menuBlock.classList.remove("menu--extended");
        menuExtender.classList.remove("menu-extender--extended");
        isMenuExtended = false;
    } else if (!isMenuExtended) {
        menuBlock.classList.add("menu--extended");
        menuExtender.classList.add("menu-extender--extended");
        isMenuExtended = true;
    } else {
        alert("don't touch my vars");
        Location.reload();
    }
}

document.addEventListener("click", (e) => {
    if (e.target === menuExtender || e.target.parentElement === menuExtender) {
        changeMenuStatus(isMenuExtended);
        isMenuExtended = !isMenuExtended;
    } else if (e.target !== menuBlock && e.target.parentElement !== menuBlock && e.target.parentElement.parentElement !== menuBlock && isMenuExtended) {
        changeMenuStatus(isMenuExtended);
        isMenuExtended = !isMenuExtended;
    }
});