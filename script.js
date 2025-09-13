const videos = document.querySelectorAll('video');
const container = document.querySelector('.videos-container');

function tocaVideo() {
    const alturaTela = window.innerHeight;

    const videoAtual = Math.round(container.scrollTop / alturaTela);

    videos.forEach((video, index) => {
        if (index === videoAtual) {
             video.currentTime = 0; // reinicia o vídeo do começo
            video.play();
        } else {
            video.pause();
        }
    });
}

// dispara toda vez que rolar
container.addEventListener('scroll', tocaVideo);

// dispara logo que a página carregar
window.addEventListener('load', tocaVideo);
