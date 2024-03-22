function playRound(preplayerSelection, precomputerSelection){
    let playerSelection =  preplayerSelection.toLowerCase();
    let computerSelection = precomputerSelection.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! Rock beats scissors.");
        return 1;
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win! Paper beats rock.");
        return 1;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win! Scissors beat paper.");
        return 1;
    }
    else if(playerSelection === "rock" && computerSelection === "rock"){
        console.log("It's a tie.");
        return 0;
    }
    else if(playerSelection === "paper" && computerSelection === "paper"){
        console.log("It's a tie.");
        return 0;
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors"){
        console.log("It's a tie.");
        return 0;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose! Rock beats scissors.");
        return -1;
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose! Paper beats rock.");
        return -1;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose! Scissors beats paper.");
        return -1;
    }
}

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
          return 'ROCK'
        case 1:
          return 'PAPER'
        case 2:
          return 'SCISSORS'
    }
}

function playgame(){
    let player = 0;
    let com = 0;
    for(let i = 0; i < 5; i ++){    
        let playerSelection = prompt("Enter Your Choice.");
        const computerSelection = getComputerChoice();
        let digit = playRound(playerSelection, computerSelection);
        //console.log(`digit is ${digit}`);
        if(digit > 0){
            player++;
        }
           
        else if(digit < 0){
            com++;
        }
    }
    if(player > com)
        console.log("You are the winner!");
    else if(player < com)
        console.log("You lost.");
    else
        console.log("There is no winner.");
}
  
playgame();
  