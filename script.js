let givenChoice;

function getComputerChoice() {
    let chosenNo;
    chosenNo = Math.floor(Math.random() * 3);
    
    if (chosenNo === 0) {
        givenChoice = 'Rock';
    }
    else if (chosenNo === 1) {
        givenChoice = 'Paper';
    }
    else {
        givenChoice = 'Scissor';
    }

    console.log(chosenNo);
}

getComputerChoice();
console.log(givenChoice);
