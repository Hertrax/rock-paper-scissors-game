
let options = ["rock", "paper", "scissors"];
const message = document.getElementById("message");
let userscoredisplay = document.getElementById("userscore");
let compscoredisplay = document.getElementById("compscore");
let userscore = 0;
let compscore = 0;

/*This is the actual game that will be played*/

function checkWinner(playerselection, computerselection) {

    if ((playerselection == 'rock' && computerselection == options[2]) ||
       (playerselection == 'paper' && computerselection == options[0]) ||
       (playerselection == 'scissors' && computerselection == options[0])) {
       return 'player';
    }
    else if ((playerselection == "scissors" && computerselection == options[0]) ||
             (playerselection == "rock" && computerselection == options[1]) ||
             (playerselection == "paper" && computerselection == options[2])) {
             return 'computer';
            }
    else   {
            return 'draw';
            }
    } 

    /*function getplayerselection() {
        let validatedInput = false;
        while(validatedInput == false) {
            const choice = prompt("Rock Paper or Scissors");
            if (choice == null) {
                validatedInput == false;
                continue;
            }
            const choiceInLower = choice.toLowerCase();
            if (options.includes(choiceInLower)) {
                validatedInput == true;
                return choiceInLower;
            }
        }
    }*/

function playRound(playerselection) {
    let computerselection = getCompChoice();
    let result = checkWinner(playerselection, computerselection);
    
    if (result == 'draw') {
        message.textContent = "It's a draw";
    }
    else if (result == 'player') {
        userscore++;
        message.textContent = `You win! ${playerselection} beats ${computerselection}`;
        userscoredisplay.innerHTML = ("Player : " + userscore);
    }

    else {
        message.textContent = `You lose! ${computerselection} beats ${playerselection}`;
        compscore++;
        compscoredisplay.innerHTML = ("Computer : " + compscore);
    }
}

function getCompChoice() {
    return ((options[(Math.floor(Math.random() * options.length))]));
};

/*
function getCompChoice() {
    return ((options[(Math.floor(Math.random() * options.length))]));
}
 
function getUserChoice() {
    let user = document.getElementById('button').value;
    let userChoice = user.toLowerCase();
    if ((userChoice == 'scissors') || (userChoice == 'rock') || (userChoice == 'paper')) {
} 

function draw(user, comp) {
        userscore += 1;
        compscore += 1;
        message = "Its a draw";
        score = userscore + " : " + compscore;
        return (alert(message), alert(score));
}

function userpoint(user, comp) {
            userscore += 1;
            score = userscore + " : " + compscore;
            message = "You got a point";
            return(alert(message), alert(score));
}

function compoint(user, comp ) {
    compscore += 1;
    message = "Computer got a point"
    score = userscore + ' : ' + compscore;
    return(alert(message),  alert(score));
}*/