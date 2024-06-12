// Função para ajustar as polaroids em um varal
function arrangePolaroids() {
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach((polaroid, index) => {
        const angle = -5 + (index * 5); // Ajuste o ângulo para cada polaroid
        const translateY = -5 + (index * 10); // Ajuste o translateY para cada polaroid
        polaroid.style.transform = `rotate(${angle}deg) translateY(${translateY}px)`;
    });
}

// Chamada da função ao carregar a página
window.addEventListener('load', () => {
    arrangePolaroids();
});
