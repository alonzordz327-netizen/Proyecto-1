
const videoElement = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');
const interactOverlay = document.getElementById('interact-overlay');


playButton.addEventListener('click', function() {

    videoElement.play();
    videoElement.style.opacity = '1'; 

    interactOverlay.classList.add('hidden');
});
