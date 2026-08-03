// Mensaje de bienvenida
window.addEventListener("load", () => {
    setTimeout(() => {
        alert("👋 ¡Bienvenido a PILINGO RP!");
    }, 500);
});

// Animación al hacer scroll
const cards = document.querySelectorAll(".card");

function mostrarCards() {
    const alturaPantalla = window.innerHeight;

    cards.forEach(card => {
        const posicion = card.getBoundingClientRect().top;

        if (posicion < alturaPantalla - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

// Estado inicial
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
});

window.addEventListener("scroll", mostrarCards);
mostrarCards();

// Efecto de cambio de color en el título
const titulo = document.querySelector(".logo h1");

setInterval(() => {
    titulo.style.color = titulo.style.color === "#ff1493" ? "#ffffff" : "#ff1493";
}, 1200);

// Botón "Entrar al Servidor"
const btnServidor = document.querySelector(".btn");

btnServidor.addEventListener("click", (e) => {
    e.preventDefault();
    alert("🚧 Próximamente podrás conectarte directamente al servidor.");
});

// Botón "Whitelist"
const btnWhitelist = document.querySelector(".btn2");

btnWhitelist.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "whitelist.html";
});
