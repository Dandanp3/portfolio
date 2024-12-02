function openVideoModal(videoElement) {
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    modalVideo.src = videoElement.src; // Define o vídeo que será exibido
    modal.style.display = "flex";
}

function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    modal.style.display = "none";
    modalVideo.pause(); // Pausa o vídeo ao fechar o modal
    modalVideo.src = ""; // Remove o vídeo do modal
}
