const container = document.querySelector("#fundo");
const image = container.querySelector("img");

const cursor = {
    isDragging: false,
    initialPosition: 0,
};

let currentImage = 1;

updateImage = (direction) => {
    if (direction < 0) {
        if (currentImage == 21) {
            currentImage = 1;
        } else {
            currentImage += 1;
        }
    }

    if (direction > 0) {
        if (currentImage == 1) {
            currentImage = 21;
        } else {
            currentImage -= 1;
        }
    }

    image.src = `imgs/${currentImage}.jpg`;
};

container.addEventListener("mousedown", (event) => {
    cursor.isDragging = true;
    cursor.initialPosition = event.clientX;
});

container.addEventListener("mouseup", () => {
    cursor.isDragging = false;
});

container.addEventListener("mousemove", ({ clientX }) => {
    if (!cursor.isDragging) return;

    const offset = cursor.initialPosition - clientX;

    if (Math.abs(offset) >= 40) {
        updateImage(offset);
        cursor.initialPosition = clientX;
    }
});


const popup = document.getElementById('popup');
const openButton = document.getElementById('cta');

function togglePopup() {
    popup.classList.toggle('hidden');

    // Seleciona o botão de fechar após o popup ser mostrado ou escondido
    const closeButton = document.querySelector('.close');

    closeButton.addEventListener('click', togglePopup);
}

openButton.addEventListener('click', togglePopup);