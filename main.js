function dark() {
    var md = document.getElementById("fondo");
    var checkbox = document.getElementById("dark-mode-checkbox");
    var navd=document.getElementById("barraN");
    var ico=document.getElementById("dm")
    if (checkbox.checked) {
        navd.style.background="gray";
        md.style.backgroundColor = "black";
        ico.innerHTML='<i class="fa-solid fa-sun"></i>'
        ico.style.color="yellow"
    } else {
        md.style.backgroundColor = "rgb(224, 252, 223)";
        navd.style.background=" linear-gradient(100deg,green, rgb(124, 245, 124), rgb(19, 95, 0))";
        ico.innerHTML='<i class="fa-solid fa-moon"></i>'
        ico.style.color="gray"
    }
}