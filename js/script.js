//Remover o texto do placeholder quando o usuário clicar no input

const inputLocal = document.querySelector('#inputLocal')
const inputRetirada = document.querySelector('#inputLocalRetirada')
const inputData = document.querySelector('#inputData')
const inputDataRetirada = document.querySelector('#inputDataRetirada')


//Input local
inputLocal.addEventListener('focus', function(){
    inputLocal.placeholder = ""
})

inputLocal.addEventListener('blur', function(){
    if (inputLocal.value === ""){
        inputLocal.placeholder = "Local"
    }
})

//Input Local de retirada
inputRetirada.addEventListener('focus', function(){
    inputRetirada.placeholder = ""
})

inputRetirada.addEventListener('blur', function(){
    if (inputRetirada.value === ""){
        inputRetirada.placeholder = "Retirada"
    }
})

//Input data
inputData.addEventListener('focus', function(){
    inputData.placeholder = ""
})

inputData.addEventListener('blur', function(){
    if (inputData.value === ""){
        inputData.placeholder = "dd/mm/yyyy"
    }
})

//Input data de retirada
inputDataRetirada.addEventListener('focus', function(){
    inputDataRetirada.placeholder = ""
})

inputDataRetirada.addEventListener('blur', function(){
    if (inputDataRetirada.value === ""){
        inputDataRetirada.placeholder = "dd/mm/yyyy"
    }
})





function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuIcon = document.querySelector('.icon-Menu'); // Corrigido o seletor
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuIcon.src = "imgs/menuHamburguer.png"; // Ícone de hamburguer
    } else {
        menuMobile.classList.add('open');
        menuIcon.src = "imgs/btnClose.png"; // Ícone de fechar
    }
}

function menuShow() {
    console.log('menuShow function called'); // Verifique se esta mensagem aparece no console

    let menuMobile = document.querySelector('.mobile-menu');
    let menuIcon = document.querySelector('.icon-Menu');
    
    if (menuMobile.classList.contains('open')) {
        console.log('Menu is open, closing it');
        menuMobile.classList.remove('open');
        menuIcon.src = "imgs/menuHamburguer.png"; // Ícone de hambúrguer
    } else {
        console.log('Menu is closed, opening it');
        menuMobile.classList.add('open');
        menuIcon.src = "imgs/btnClose.png"; // Ícone de fechar
    }
}




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