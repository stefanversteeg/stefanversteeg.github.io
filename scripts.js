document.getElementById('frontend-box').addEventListener('click', function() {
    var animationContainer = document.getElementById('frontend-animation');
    animationContainer.style.display = 'block';
    animationContainer.innerHTML = '<svg viewBox="0 0 100 100" class="smiley"><circle cx="50" cy="50" r="40" fill="yellow"/><circle cx="35" cy="40" r="5" fill="black"/><circle cx="65" cy="40" r="5" fill="black"/><path d="M 30 60 Q 50 80 70 60" stroke="black" fill="transparent" stroke-width="3"/></svg>';

    setTimeout(function() {
        animationContainer.style.display = 'none';
    }, 2000); // Verwijder de animatie na 2 seconden
});

document.getElementById('backend-box').addEventListener('click', function() {
    var animationContainer = document.getElementById('backend-animation');
    animationContainer.style.display = 'block';
    animationContainer.innerHTML = '<div class="back-end-animation"></div>';

    setTimeout(function() {
        animationContainer.style.display = 'none';
    }, 5000); // Verwijder de animatie na 3 seconden
});
