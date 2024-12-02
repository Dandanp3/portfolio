// Pega o trigger da imagem e o modal
const imageModalTrigger = document.getElementById("imageModalTrigger");
const imageModal = document.getElementById("imageModal");
const expandedImage = document.getElementById("expandedImage");
const closeModal = document.getElementById("closeModal");

// Quando a imagem for clicada, exibe o modal e coloca a imagem expandida
imageModalTrigger.onclick = function() {
    imageModal.style.display = "flex"; // Exibe o modal
    expandedImage.src = imageModalTrigger.src; // Atribui a imagem ao modal
}

// Quando clicar no X, fecha o modal
closeModal.onclick = function() {
    imageModal.style.display = "none";
}

// Fechar modal se clicar fora da imagem
window.onclick = function(event) {
    if (event.target == imageModal) {
        imageModal.style.display = "none";
    }
}
