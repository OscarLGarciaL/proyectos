var toggle = "false";

function menu() {

    var divMenu = document.getElementById("menu");

    var headerContenedor = document.getElementById("headerContenedor");

    if (toggle === "false") {
        divMenu.style.background = "url(/images/icons/close-white-48dp.svg)";

        headerContenedor.style.height = "inherit";

        toggle = "true";
    } else {
        divMenu.style.background = "url(/images/icons/menu-white-48dp.svg)";

        headerContenedor.style.height = "75px";

        toggle = "false";
    }
}

