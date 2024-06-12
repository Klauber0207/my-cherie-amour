document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const errorMessage = document.getElementById('error-message');
    const mainContent = document.getElementById('main-content');
    const initialScreen = document.getElementById('initial-screen');

    yesButton.addEventListener('click', () => {
        // Altera o background ao clicar em "Sim"
        document.body.style.backgroundImage = "url('back.jpg')"; // Substitua com o caminho da nova imagem
        document.body.style.backgroundSize = "cover"; // Ajusta o tamanho para cobrir toda a tela
        document.body.style.backgroundPosition = "center"; // Centraliza a imagem no fundo

        initialScreen.style.display = 'none'; // Esconde a tela inicial
        mainContent.classList.remove('hidden'); // Exibe o conteúdo principal
    });

    noButton.addEventListener('click', () => {
        errorMessage.textContent = 'Resposta errada';
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
