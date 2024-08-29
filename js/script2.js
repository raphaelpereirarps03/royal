const reviews = document.querySelectorAll('.review-card');
const reviewsPerView = 3;  // Mostrar 3 avaliações por vez
let currentStartIndex = 0;
let autoSlideInterval;

// Função para atualizar o carrossel de avaliações
function updateCarousel() {
    reviews.forEach((review, index) => {
        if (index >= currentStartIndex && index < currentStartIndex + reviewsPerView) {
            review.style.display = 'flex'; // Mostrar o card
        } else {
            review.style.display = 'none'; // Esconder o card
        }
    });

    // Desabilita a seta esquerda se no início e a direita se no final
    document.querySelector('.left-arrow').disabled = currentStartIndex === 0;
    document.querySelector('.right-arrow').disabled = currentStartIndex + reviewsPerView >= reviews.length;
}

// Função para avançar automaticamente para a próxima página de avaliações
function autoSlide() {
    if (currentStartIndex + reviewsPerView < reviews.length) {
        currentStartIndex += reviewsPerView; // Avança o índice inicial
    } else {
        currentStartIndex = 0; // Volta ao início quando chegar ao final
    }
    updateCarousel();
}

// Inicializa o carrossel e o slide automático
function initCarousel() {
    updateCarousel();
    autoSlideInterval = setInterval(autoSlide, 5000); // Muda de avaliação a cada 3 segundos
}

// Pausa o slide automático
function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Reinicia o slide automático
function restartAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 4000);
}

// Configuração inicial do carrossel
initCarousel();

// Avança para a próxima página de avaliações ao clicar na seta direita
document.querySelector('.right-arrow').addEventListener('click', () => {
    pauseAutoSlide(); // Pausa o slide automático
    if (currentStartIndex + reviewsPerView < reviews.length) {
        currentStartIndex += reviewsPerView; // Avança o índice inicial
        updateCarousel();
    }
    restartAutoSlide(); // Reinicia o slide automático
});

// Retrocede para a página anterior de avaliações ao clicar na seta esquerda
document.querySelector('.left-arrow').addEventListener('click', () => {
    pauseAutoSlide(); // Pausa o slide automático
    if (currentStartIndex - reviewsPerView >= 0) {
        currentStartIndex -= reviewsPerView; // Retrocede o índice inicial
        updateCarousel();
    }
    restartAutoSlide(); // Reinicia o slide automático
});

