let cpu_score = 0;
let player_score = 0;
const btns = document.querySelector(".buttons");

function getComputerChoice(){
    return Math.floor(Math.random() * 3)+1
}


btns.addEventListener("click", (event) => {
    let txt = document.querySelector("#txt");
    let scoreText = document.querySelector("#score");
    let target = event.target;

    switch (target.id) {
        case 'rock':
            if (getComputerChoice() == 1) {
                txt.innerText = "Computer chose rock. It's a draw!";
            } else if (getComputerChoice() == 2) {
                cpu_score++;
                txt.innerText = "Computer chose paper. You lose!";
            } else {
                player_score++;
                txt.innerText = "Computer chose scissors. You win!";
            }
            break;
        case 'paper':
            if (getComputerChoice() == 1) {
                txt.innerText = "Computer chose rock. You win!";
                player_score++;
            } else if (getComputerChoice() == 2) {
                txt.innerText = "Computer chose paper. It's a draw!";
            } else {
                cpu_score++;
                txt.innerText = "Computer chose scissors. You lose!";
            }
            break;
        case 'scissors':
            if (getComputerChoice() == 1) {
                cpu_score++;
                txt.innerText = "Computer chose rock. You lose!";
            } else if (getComputerChoice() == 2) {
                player_score++;
                txt.innerText = "Computer chose paper. You win!";
            } else {
                txt.innerText = "Computer chose scissors. It's a draw!";
            }
            break;
    }
    
    scoreText.innerText = `The score is CPU: ${cpu_score} Player: ${player_score}`;
});