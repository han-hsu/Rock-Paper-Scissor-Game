let yourChoose = document.querySelector('#you')
let computerChoose = document.querySelector('#computer')
let winScore = document.querySelector('#win')
let loseScore = document.querySelector('#lose')
let tieScore = document.querySelector('#tie')
let matchRound = document.querySelector('#round');

const score = {
    win : 0,
    lose : 0,
    tie : 0,
    round : 0,
}

function randomMove() {
    let random = Math.random();
    let result = ''

    if (random < 1/3) {
        result = 'rock'
    } else if (random > 1/3 && random < 2/3) {
        result = 'paper'
    } else if (random > 2/3 && random < 1) {
        result = 'scissor'
    }

    // computerChoose.textContent = result;
    computerChoose.innerHTML = `<img src="./Pic/${result}.png" alt="">`

    return result; 
}

function restartAll(){
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    score.round = 0;

    winScore.textContent = score.win;
    loseScore.textContent = score.lose;
    tieScore.textContent = score.tie
    matchRound.textContent = score.round
    computerChoose.textContent = ''
    yourChoose.textContent = ''
}

function play(move) {
    let computerMove = randomMove();
    let result = '';

    if (move === computerMove) {
        result = 'tie'
    } else if (
        (move === 'rock' && computerMove === 'scissor') ||
        (move === 'scissor' && computerMove === 'paper') || 
        (move === 'paper' && computerMove === 'rock')
    ) {
        result = 'you win'
    } else if (
        (computerMove === 'rock' && move === 'scissor') ||
        (computerMove === 'scissor' && move === 'paper') || 
        (computerMove === 'paper' && move === 'rock')
    ) {
        result = 'you lose'
    } else {
        result = 'please chose your move'
    }

    yourChoose.innerHTML = `<img src="./Pic/${move}.png" alt="">`
    
    if (result === 'you win') {
        score.win += 1
    } else if (result === 'tie') {
        score.tie += 1
    } else if (result === 'you lose') {
        score.lose += 1
    }
    score.round += 1;

    winScore.textContent = score.win
    loseScore.textContent = score.lose
    tieScore.textContent = score.tie
    matchRound.textContent = score.round


}
