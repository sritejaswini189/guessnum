let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessField = document.getElementById('guess');
let btn = document.getElementById('btn');
let msg = document.getElementById('msg');

btn.addEventListener('click', function() {
    let userGuess = Number(guessField.value);
    if (userGuess === randomNumber) {
        displayMessage('🎉 Congratulations! You guessed the right number!', 'success');
    } else if (userGuess > randomNumber) {
        displayMessage('📉 Too high! Try again.', 'warning');
    } else {
        displayMessage('📈 Too low! Try again.', 'warning');
    }
});

function displayMessage(text, type) {
    msg.textContent = text;
    msg.className = type;
}
