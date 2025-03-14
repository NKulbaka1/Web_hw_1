// Кнопка для изменения цвета фона
const button = document.getElementById('changeColorButton');
const colors = ['#f4f4f4', '#e0f7fa', '#fff3e0', '#ffebee'];
let currentColorIndex = 0;

button.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});

// Увеличение фотографий при клике
const images = document.querySelectorAll('.gallery img');
images.forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoom');
  });
});

let currentSlide = 0;

function scrollSlider(direction) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider li');
  const totalSlides = slides.length;

  currentSlide += direction;

  // Зацикливаем слайдер
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  // Прокручиваем слайдер
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}