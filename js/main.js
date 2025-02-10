function openModal(img) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");

    modal.style.display = "flex";
    modalImg.src = img.src;

    modalImg.onwheel = function(event) {
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