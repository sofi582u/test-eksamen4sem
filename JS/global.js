window.addEventListener("load", SidenVises);

function SidenVises() {
    console.log("SidenVises");

    document.querySelector("#menubutton").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menubutton").innerHTML = "<img class=\"header-menu-icon\" src=\"img/burger-menu-icon.svg\" alt=\"Menu icon\">";
    } else {
        document.querySelector("#menubutton").innerHTML = "<img class=\"header-menu-icon\" src=\"img/cross-menu-icon.svg\" alt=\"Menu icon\">";
    }

}
