// Pega o trigger da imagem e o modal
const imageModalTrigger = document.getElementById("imageModalTrigger");
const imageModal = document.getElementById("imageModal");
const expandedImage = document.getElementById("expandedImage");
const closeModal = document.getElementById("closeModal");


imageModalTrigger.onclick = function() {
    imageModal.style.display = "flex"; 
    expandedImage.src = imageModalTrigger.src; 
}

closeModal.onclick = function() {
    imageModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == imageModal) {
        imageModal.style.display = "none";
    }
}
