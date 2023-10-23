// Função para criar uma rolagem suave quando os links de ancoragem são clicados
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previne o comportamento padrão do link
        e.preventDefault();
        // Rola suavemente para o destino do link de ancoragem
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
