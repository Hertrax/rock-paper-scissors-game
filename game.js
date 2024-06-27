
user = prompt('Welcome! enter j for rock, k for paper, and l for paper.');

function converter(user) {
    if ( user == "j") {
        return user = "rock";
    }
    else if (user == "k") {
        return user = "paper";
    }
    else if (user == "l") {
        return user = "scissors";
    }
    else {
        return alert("choose an option to play.");
    }
}

options = ["rock", "paper", "scissors"];

userscore = 0;
compscore = 0;
comp = (options[(Math.floor(Math.random() * options.length))]);
score = 0;
message = "";

playgame(user,comp);
game(user, comp);

function game(user, comp) {
    playgame(user, comp);
    playgame(user, comp);
    playgame(user, comp);
    playgame(user, comp);
} 

function draw(user, comp) {
        userscore += 1;
        compscore += 1;
        message = "Its a draw";
        score = userscore + " : " + compscore;
        return (alert(message), userscore, compscore, alert(score));
}

function userpoint(user, comp) {
            userscore += 1;
            score = userscore + " : " + compscore;
            message = "You got a point";
            return(alert(message), userscore, compscore, alert(score));
}

function compoint(user, comp ) {
    compscore += 1;
    message = "Computer got a point"
    return(alert(message),userscore, compscore,  alert(score));
}
function playgame(user, comp) {
    user = prompt ("enter j fot rock, k for paper and l for scissors");
    converter(user);

    if (user == comp) {
        draw(user, comp);
    }
    else if ((user == "scissors" && comp == options[0]) ||
             (user == "rock" && comp == options[1]) ||
             (user == "paper" && comp == options[2])) {
             compoint(user, comp);
            }
    else if ((user == "rock" && comp == options[1]) ||
             (user == "paper" && comp == options[2]) ||
             (user == "scissors" && comp == options[0])) {
             userpoint(user, comp);
             }
    else {};
    }