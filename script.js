let currentSection = 0;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Прокрутка вниз
        if (currentSection < totalSections - 1) {
            currentSection++;
        }
    } else {
        // Прокрутка вверх
        if (currentSection > 0) {
            currentSection--;
        }
    }

    // Анимация перехода
    document.querySelector('.horizontal-scroll').style.transform = `translateX(-${currentSection * 100}vw)`;
});