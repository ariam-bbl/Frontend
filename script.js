const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

let humanChoice = "";
let computerChoice = "";

buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        humanChoice = event.target.id;
        humanOutput.innerHTML = humanChoice;
        
        generateComputerChoice();
        determineWinner();
    });
});

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        computerChoice = "steen";
    } else if (randomNumber === 1) {
        computerChoice = "papier";
    } else if (randomNumber === 2) {
        computerChoice = "schaar";
    }
    
    computerOutput.innerHTML = computerChoice;
}

function determineWinner() {
    if (humanChoice === computerChoice) {
        resultOutput.innerHTML = "Gelijkspel!";
        return;
    }

    switch (humanChoice) {
        case "steen":
            if (computerChoice === "schaar") {
                resultOutput.innerHTML = "Je hebt gewonnen! Steen wint van schaar.";
            } else {
                resultOutput.innerHTML = "Computer heeft gewonnen! Papier wint van steen.";
            }
            break;
            
        case "papier":
            if (computerChoice === "steen") {
                resultOutput.innerHTML = "Je hebt gewonnen! Papier wint van steen.";
            } else {
                resultOutput.innerHTML = "Computer heeft gewonnen! Schaar wint van papier.";
            }
            break;
            
        case "schaar":
            if (computerChoice === "papier") {
                resultOutput.innerHTML = "Je hebt gewonnen! Schaar wint van papier.";
            } else {
                resultOutput.innerHTML = "Computer heeft gewonnen! Steen wint van schaar.";
            }
            break;
    }
}