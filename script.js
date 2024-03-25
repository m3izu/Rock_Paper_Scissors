


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
            return 'PAPER w';
        }
        else if (computerSelection === 'SCISSOR') {
            return 'ROCK w';
        }
        else {
            return 'tie nigga';
        }
    }
    else if (playerSection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            return 'PAPER w';
        }
        else if (computerSelection === 'SCISSOR') {
            return 'SCISSOR w';
        }
        else if (computerSelection === 'PAPER') {
            return 'tie nigga'
        };
    }
    else if (playerSection === 'SCISSOR') {
        if (computerSelection === 'ROCK') {
            return 'ROCK w';
        }
        else if (computerSelection === 'PAPER') {
            return 'SCISSOR w';
        }
        else if (computerSelection === 'SCISSOR') {
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
}
playGame();
