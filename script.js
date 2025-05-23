const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randInt = Math.floor(Math.random() * choice.length);
    return choice[randInt];
}   


function getHumanChoice(){
    const input = prompt("It's your turn! Choose either Rock, Paper or Scissors");
    return input;
}


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        console.log("That is a tie");
    }else if((humanChoice === "rock" && computerChoice == "scissors") ||
            (humanChoice === "paper" && computerChoice == "rock") ||
            (humanChoice === "scissors" && computerChoice == "paper")) {
                console.log("Yayyy, You score a point!");
                humanScore++;
    }else{
        console.log("Haha, you loose a point!");
        computerScore++;
    }
}




function playGame(){
    for(let i = 1; i <=5; i++){

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    if(humanScore > computerScore){
        console.log("Yayy, you win!")
    }else{
        console.log("Sigh, you loose!")
    }

}


playGame();