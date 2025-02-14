function openModal(img) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");

    modal.style.display = "flex";
    modalImg.src = img.src;

    modalImg.onwheel = function (event) {
        event.preventDefault();
        let scale = event.deltaY > 0 ? 0.9 : 1.1;
        modalImg.style.transform = `scale(${scale})`;
    };
}

function closeModal(event) {
    if (event.target.id === "modal" || event.target.id === "close") {
        document.getElementById("modal").style.display = "none";
    }
}

// ------------------------
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

const showSlide = (i) => {
    index = (i + slide.length) % slide.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
};

const nextSlide = () => showSlide(index + 1);
const prevSlide = () => showSlide(index - 1);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000); 