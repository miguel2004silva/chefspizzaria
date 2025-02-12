// Adiciona uma classe ao header quando o usuário rola a página
window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled"); // Adiciona a classe quando rolar para baixo
    } else {
        header.classList.remove("scrolled"); // Remove a classe quando estiver no topo
    }
});
