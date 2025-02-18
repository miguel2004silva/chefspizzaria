document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var header = document.querySelector(".header");
        var links = document.querySelectorAll(".header section nav a");

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            links.forEach(link => link.style.color = "#131313"); // Cor preta nos links
        } else {
            header.classList.remove("scrolled");
            links.forEach(link => link.style.color = "#fff"); // Volta para branco
        }
    });
});

const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

function mostrarModal(){

    modal.style.left = '50%'
    mascara.style.visibility = 'visible'

}

function esconderModal(){
    modal.style.left = '-30%'
    mascara.style.visibility = 'hidden'
}

