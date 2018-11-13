// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    number: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    computerHand: ""
}

// pobrane zdjęcia z możliwymi wyborami
const hands = document.querySelectorAll('.select img');


// Pierwsz funkcja
// const handSelection = (e) => {
//     console.log(e.target);
// }

function handSelection() {
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px red';
}

function computerChoice() {
    const computerHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return computerHand;
}

function checkResult(player, computer) {
    // console.log(player, computer);
    if (player === computer) {
        return "draw";
    } else if ((player === "papier" && computer === "kamień") || (player === "kamień" && computer === "nożyczki") || (player === "nożyczki" && computer === "papier")) {
        return "win";
    } else {
        return "loss"
    }
}

function publishResult(player, computer, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;

    document.querySelector('[data-summary="ai-choice"]').textContent = computer;

    document.querySelector('p.numbers span').textContent = ++gameSummary.number;

    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrana jest Twoja!"
    } else if (result === "loss") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Przegrałeś!";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis!";
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
}

//Funkcja sterująca
function startGame() {
    if (!game.playerHand) {
        return alert(`Wybierz dłoń!`)
    }
    game.computerHand = computerChoice();
    const gameResult = checkResult(game.playerHand, game.computerHand);
    publishResult(game.playerHand, game.computerHand, gameResult);
    endGame();

}


hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame);