//written by m3izu, looks janky but goodenough..... i think
let noWin = 0;
let noLoss = 0;
let noTie = 0;

function getComputerChoice() {
    let chosenNo = Math.floor(Math.random() * 3);
    console.log(chosenNo)
    if (chosenNo === 0) {
        return 'ROCK';
    }
    else if (chosenNo === 1) {
        return 'PAPER';
    }
    else {
        return 'SCISSOR';
    }

}


function playRound(playerSection, computerSelection) {
    
    

    if (playerSection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            noLoss +=1;
            return 'PAPER w';
        }
        else if (computerSelection === 'SCISSOR') {
            noWin += 1;
            return 'ROCK w';
        }
        else {
            noTie += 1;
            return 'tie nigga';
        }
    }
    else if (playerSection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            noWin += 1;
            return 'PAPER w';
        }
        else if (computerSelection === 'SCISSOR') {
            noLoss += 1;
            return 'SCISSOR w';
        }
        else if (computerSelection === 'PAPER') {
            noTie += 1;
            return 'tie nigga'
        };
    }
    else if (playerSection === 'SCISSOR') {
        if (computerSelection === 'ROCK') {
            noLoss += 1;
            return 'ROCK w';
        }
        else if (computerSelection === 'PAPER') {
            noWin += 1;
            return 'SCISSOR w';
        }
        else if (computerSelection === 'SCISSOR') {
            noTie += 1;
            return 'tie';
        }
    }
    else {
        return 'not an option'
    }
}


function playGame() {
    for (i = 1; i <= 5; i++) {
        let prePlayerSection;
        prePlayerSection = prompt('Enter RPS:')
        let playerSection = prePlayerSection.toUpperCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSection, computerSelection))
    }
    console.log(`You have won ${noWin} time(s), lost ${noLoss} time(s), and have tied ${noTie} time(s)`)
}
playGame();
