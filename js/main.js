function openModal(img) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");
    let scale = 1;

    modal.style.display = "flex";
    modalImg.src = img.src;

    modalImg.onwheel = function (event) {
        event.preventDefault();
        scale += event.deltaY > 0 ? -0.1 : 0.1;
        scale = Math.min(Math.max(scale, 0.5), 3);
        modalImg.style.transform = `scale(${scale})`;
    };
}

function closeModal(event) {
    if (event.target.id === "modal" || event.target.id === "close") {
        document.getElementById("modal").style.display = "none";
    }
}

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;
let isDragging = false;
let startX = 0;
let endX = 0;
let autoSlide;

const showSlide = (i) => {
    index = (i + slide.length) % slide.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
    slides.style.transition = 'transform 0.5s ease-in-out';
};

const nextSlide = () => showSlide(index + 1);
const prevSlide = () => showSlide(index - 1);

const startAutoSlide = () => {
    autoSlide = setInterval(nextSlide, 3000);
};

const stopAutoSlide = () => {
    clearInterval(autoSlide);
};

slides.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    slides.style.transition = 'none';
    stopAutoSlide();
});

slides.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    endX = e.clientX;
    const diff = endX - startX;
    slides.style.transform = `translateX(${-index * 100 + diff / slides.offsetWidth * 100}%)`;
});

slides.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    const diff = endX - startX;
    if (diff > 50) prevSlide();
    else if (diff < -50) nextSlide();
    else showSlide(index);
    startAutoSlide();
});

slides.addEventListener('mouseleave', () => {
    if (!isDragging) return;
    isDragging = false;
    showSlide(index);
    startAutoSlide();
});

slides.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    slides.style.transition = 'none';
    stopAutoSlide();
});

slides.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    endX = e.touches[0].clientX;
    const diff = endX - startX;
    slides.style.transform = `translateX(${-index * 100 + diff / slides.offsetWidth * 100}%)`;
});

slides.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    const diff = endX - startX;
    if (diff > 50) prevSlide();
    else if (diff < -50) nextSlide();
    else showSlide(index);
    startAutoSlide();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

startAutoSlide();
