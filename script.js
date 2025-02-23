// Обновление времени
function updateServerTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    const serverTimeElement = document.querySelector('.server-time');
    if (serverTimeElement) {
        serverTimeElement.textContent = timeString;
    }
}

setInterval(updateServerTime, 1000);
updateServerTime();

// Горизонтальный скролл
let currentSection = 0;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;
const scrollContainer = document.querySelector('.horizontal-scroll');
const navLinks = document.querySelectorAll('.nav-link');

function scrollToSection(index) {
    if (index < 0 || index >= totalSections) return;
    currentSection = index;
    scrollContainer.style.transform = `translateX(-${currentSection * 100}vw)`;

    // Обновляем состояние стрелок
    document.querySelector('.left-arrow').disabled = currentSection === 0;
    document.querySelector('.right-arrow').disabled = currentSection === totalSections - 1;

    // Обновляем активную кнопку навигации
    updateNavLinks();
}

function updateNavLinks() {
    navLinks.forEach((link, index) => {
        if (index === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Обработчик колеса мыши
window.addEventListener('wheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        if (currentSection < totalSections - 1) {
            scrollToSection(currentSection + 1);
        }
    } else {
        if (currentSection > 0) {
            scrollToSection(currentSection - 1);
        }
    }
});

// Обработчики для стрелок
document.querySelector('.left-arrow').addEventListener('click', () => {
    if (currentSection > 0) {
        scrollToSection(currentSection - 1);
    }
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    if (currentSection < totalSections - 1) {
        scrollToSection(currentSection + 1);
    }
});

// Обработчики для кнопок навигации
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        const index = parseInt(link.getAttribute('data-index'), 10);
        scrollToSection(index);
    });
});

// Инициализация
scrollToSection(0);

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });