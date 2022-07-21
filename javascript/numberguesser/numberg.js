let min = 1,
    max = 10,
    winningNum = getWinningNum(min, max),
    guesseLeft = 3;

const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }
    else {
        if (guess === winningNum) {
            gameOver(true, `${winningNum} is correct, YOU WIN!`)
        }
        else {
            guesseLeft -= 1;

            if (guesseLeft === 0) {
                gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)
            }
            else {
                guessInput.style.borderColor = 'red';

                guessInput.value = '';

                setMessage(`${guess} is not correct, ${guesseLeft} guesses left`, 'red')
            }
        }
    }
});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color)

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function getWinningNum(min, max) {
    return Math.floor(Math.random() * ((max - min) + min));
}

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}



