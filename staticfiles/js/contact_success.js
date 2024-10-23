let countdownNumber = 10;
let countdownElement = document.getElementById('countdown');

function updateCountdown() {
    countdownElement.textContent = countdownNumber;
    countdownNumber--;

    if (countdownNumber < 0) {
        window.location.href = '/';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    countdownElement = document.getElementById('countdown');
    setInterval(updateCountdown, 1000);
});
