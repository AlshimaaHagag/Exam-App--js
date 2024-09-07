document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const score = params.get('score') || 'N/A';
    const message = decodeURIComponent(params.get('message')) || 'No message provided.';
    const totalQuestions = params.get('totalQuestions') || 1; // Default to 1 to avoid division by zero

    const scoreElement = document.getElementById('score');
    const messageElement = document.getElementById('message');
    const resultContainer = document.querySelector('.result-container');

    scoreElement.textContent = `Your score: ${score}`;
    messageElement.textContent = message;

    // Add animation and color based on score
    if (parseInt(score, 10) === parseInt(totalQuestions, 10)) {
        resultContainer.classList.add('flare-animation');
        resultContainer.classList.add('perfect');
    } else if (parseInt(score, 10) >= parseInt(totalQuestions, 10) / 2) {
        resultContainer.classList.add('flare-animation');
        resultContainer.classList.add('above-average');
    } else if (parseInt(score, 10) > 0) {
        resultContainer.classList.add('flare-animation');
        resultContainer.classList.add('average');
    } else {
        resultContainer.classList.add('flare-animation');
        resultContainer.classList.add('zero');
    }
});