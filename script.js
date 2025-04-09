let currentIndex = 0; // fazer o carossel atualizar a cada 4 segundos
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}, 4000);
