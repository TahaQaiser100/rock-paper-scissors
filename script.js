const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randInt = Math.floor(Math.random() * choice.length);
    return choice[randInt];
}

function updateScoreDisplay() {
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function checkForWinner() {
    if (humanScore >= 5) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <div class="winner-announcement">
                🎉 Congratulations! You won the game! 🎉
                <br>Final Score: You ${humanScore} - ${computerScore} Computer
            </div>
        `;
        disableGameButtons();
        showResetButton();
        return true;
    } else if (computerScore >= 5) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <div class="winner-announcement">
                😔 Game Over! Computer won! 😔
                <br>Final Score: You ${humanScore} - ${computerScore} Computer
            </div>
        `;
        disableGameButtons();
        showResetButton();
        return true;
    }
    return false;
}

function disableGameButtons() {
    document.getElementById('rockBtn').disabled = true;
    document.getElementById('paperBtn').disabled = true;
    document.getElementById('scissorsBtn').disabled = true;
}

function enableGameButtons() {
    document.getElementById('rockBtn').disabled = false;
    document.getElementById('paperBtn').disabled = false;
    document.getElementById('scissorsBtn').disabled = false;
}

function showResetButton() {
    document.getElementById('resetBtn').style.display = 'inline-block';
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScoreDisplay();
    document.getElementById('result').innerHTML = 'Click a button to play! First to 5 points wins!';
    enableGameButtons();
    document.getElementById('resetBtn').style.display = 'none';
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    const resultDiv = document.getElementById('result');
    
    if(humanChoice === computerChoice){
        resultDiv.innerHTML = `
            <div class="round-result">It's a tie! Both chose ${humanChoice}</div>
        `;
    }else if((humanChoice === "rock" && computerChoice == "scissors") ||
            (humanChoice === "paper" && computerChoice == "rock") ||
            (humanChoice === "scissors" && computerChoice == "paper")) {
                resultDiv.innerHTML = `
                    <div class="round-result">Yayyy, You score a point!</div>
                    <div>You chose ${humanChoice}, Computer chose ${computerChoice}</div>
                `;
                humanScore++;
    }else{
        resultDiv.innerHTML = `
            <div class="round-result">Haha, you lose a point!</div>
            <div>You chose ${humanChoice}, Computer chose ${computerChoice}</div>
        `;
        computerScore++;
    }
}

function playGame(playerSelection){
    const humanChoice = playerSelection;
    const computerChoice = getComputerChoice();
    
    playRound(humanChoice, computerChoice);
    
    updateScoreDisplay();
    checkForWinner();
}

document.getElementById('rockBtn').addEventListener('click', function() {
    playGame('rock');
});

document.getElementById('paperBtn').addEventListener('click', function() {
    playGame('paper');
});

document.getElementById('scissorsBtn').addEventListener('click', function() {
    playGame('scissors');
});

document.getElementById('resetBtn').addEventListener('click', function() {
    resetGame();
});