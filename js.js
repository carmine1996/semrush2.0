var hamburger = document.querySelector("#hamburger")
var hamburger_menu = document.querySelector("#hamburger_menu")
var close_menu = document.querySelector("#close_menu")

hamburger.addEventListener("click", function () {
    hamburger_menu.classList.toggle("effect")
})

close_menu.addEventListener("click", function () {
    hamburger_menu.classList.remove("effect")
});

document.addEventListener("click", function (close) {

    if (hamburger_menu.contains(close.target)) {
        return;
    }

    if (close.target === hamburger) {
        return;
    }

    hamburger_menu.classList.remove("effect");
});