
let options = ["rock", "paper", "scissors"];
const message = document.getElementById("message");
let userscoredisplay = document.getElementById("userscore");
let compscoredisplay = document.getElementById("compscore");
let userscore = 0;
let compscore = 0;


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

