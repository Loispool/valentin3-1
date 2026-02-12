let currentImage = 1;
const totalImages = 3;

function changePicture() {
    // Hide current image
    document.getElementById('valentineImage-' + currentImage).style.display = 'none';

    // Move to next image
    currentImage++;
    if (currentImage > totalImages) {
        currentImage = 1;
        document.body.style.backgroundColor = '#F075AE';
    }

    // Show new image
    document.getElementById('valentineImage-' + currentImage).style.display = 'block';

    // Change background color
    if (currentImage == 2) {
        document.body.style.backgroundColor = 'pink';
    } else if (currentImage == 3) {
        document.body.style.backgroundColor = '#FB9B8F';
        // Show YES message and confetti on final image!
        showYesMessage();
    }
}

function showYesMessage() {
    // Show YES message
    document.getElementById('yesMessage').style.display = 'block';
    
    // Hide the button
    document.querySelector('.clickButton').style.display = 'none';
    
    // Trigger confetti
    createConfetti();
}

function createConfetti() {
    const colors = ['#FF69B4', '#FF1493', '#FFB6C1', '#FFC0CB', '#FFD700', '#00FF00', '#00FFFF'];
    const confettiContainer = document.getElementById('confetti');
    
    // Create 100 confetti pieces
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confetti);
    }
    
    // Remove confetti after animation
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}
