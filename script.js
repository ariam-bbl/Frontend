const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

const playerScoreOutput = document.querySelector("#playerScore");
const computerScoreOutput = document.querySelector("#computerScore");
const highscoreOutput = document.querySelector("#highscore");
const streakOutput = document.querySelector("#streak");
const roundOutput = document.querySelector("#round");

const buttons = document.querySelectorAll("button");

let humanChoice = "";
let computerChoice = "";

let playerScore = 0;
let computerScore = 0;
let highscore = 0;
let streak = 0;
let round = 0;

buttons.forEach(button => {
    button.addEventListener("click", function(event) {

        round++;
        roundOutput.innerHTML = round;

        
        humanChoice = event.currentTarget.id; 
        
       
        if (humanChoice === "steen") humanOutput.innerHTML = "🪨 Steen";
        if (humanChoice === "papier") humanOutput.innerHTML = "📄 Papier";
        if (humanChoice === "schaar") humanOutput.innerHTML = "✂️ Schaar";

        generateComputerChoice();
        determineWinner();
    });
});

function generateComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = "steen";
        computerOutput.innerHTML = "🪨 Steen";
    }
    else if (randomNumber === 1) {
        computerChoice = "papier";
        computerOutput.innerHTML = "📄 Papier";
    }
    else {
        computerChoice = "schaar";
        computerOutput.innerHTML = "✂️ Schaar";
    }
}

function determineWinner() {

    if (humanChoice === computerChoice) {
        resultOutput.innerHTML = "🤝 Gelijkspel!";
        return;
    }

    switch (humanChoice) {

        case "steen":
            if (computerChoice === "schaar") {
                resultOutput.innerHTML = "🎉 Je hebt gewonnen!";
                playerScore++;
                streak++;
            } else {
                resultOutput.innerHTML = "💻 Computer heeft gewonnen!";
                computerScore++;
                streak = 0;
            }
            break;

        case "papier":
            if (computerChoice === "steen") {
                resultOutput.innerHTML = "🎉 Je hebt gewonnen!";
                playerScore++;
                streak++;
            } else {
                resultOutput.innerHTML = "💻 Computer heeft gewonnen!";
                computerScore++;
                streak = 0;
            }
            break;

        case "schaar":
            if (computerChoice === "papier") {
                resultOutput.innerHTML = "🎉 Je hebt gewonnen!";
                playerScore++;
                streak++;
            } else {
                resultOutput.innerHTML = "💻 Computer heeft gewonnen!";
                computerScore++;
                streak = 0;
            }
            break;
    }

    if (playerScore > highscore) {
        highscore = playerScore;
    }

    
    playerScoreOutput.innerHTML = playerScore;
    computerScoreOutput.innerHTML = computerScore;
    highscoreOutput.innerHTML = highscore;
    streakOutput.innerHTML = streak;
}