let ramdom = Math.floor(Math.random() * 100) + 1;
console.log(ramdom);

const num = document.querySelector('#number');
const submit = document.querySelector('#enter');
const previous = document.querySelector('.previous');
const remain = document.querySelector('.remain');
const loworhigh = document.querySelector('.lowOrhigh');
const container = document.querySelector('.container'); 
const p = document.createElement('p');

let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(num.value);
        validguess(guess);
    });
}

function validguess(guess) {
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        prevguess.push(guess);
        if (numguess === 11) {
            displayguess(guess);
            displaymessage(`GAME OVER! Random number was ${ramdom}`);
            endgame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === ramdom) {
        displaymessage('You Guessed Right!');
        endgame();
    }
}

function displayguess(guess) {
    num.value = "";
    previous.innerHTML += `${guess}, `;
    numguess++;
    remain.innerHTML = `Remaining chances: ${11 - numguess}`;
}

function displaymessage(message) {
    loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    num.value = "";
    num.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newgame">Start New Game</button>`;
    container.appendChild(p);
    playgame = false;
    newgame(); 
}

function newgame() {
    const newgame = document.querySelector('#newgame');
    newgame.addEventListener('click', function () {
        ramdom = Math.floor(Math.random() * 100) + 1;
        console.log("New number:", ramdom);
        prevguess = [];
        numguess = 1;
        previous.innerHTML = "";
        remain.innerHTML = "";
        num.removeAttribute('disabled');
        if (container.contains(p)) {
            container.removeChild(p);
        }
        loworhigh.innerHTML = "";
        playgame = true;
    });
}
