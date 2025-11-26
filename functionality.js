//console.log("Hello world!");

let cpu_score = 0;
let player_score = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * 3)+1
}

//console.log(cpu());

function getHumanChoice(){
    const choice = prompt("Choose Rock, Paper or Scissors. Type 1, 2 or 3");
    // if (choice < '1' && choice > '3'){
    //     console.log("Please choose between 1, 2 or 3");
    //     getHumanChoice();
    // }
    return choice;
}

function play(){
    cpu = getComputerChoice();
    choice = getHumanChoice();

    console.log(cpu, choice);

    if (cpu === 1 && choice == 1){
        console.log("Computer chose Rock!");
        console.log("Its a draw!");
    } else if (cpu === 1 && choice == 2){
        console.log("Computer chose Rock!");
        console.log("You win!");
        player_score++;
    } else if (cpu === 1 && choice == 3){
        console.log("Computer chose Rock!");
        console.log("You lose!");
        cpu_score++;
    } else if (cpu === 2 && choice == 1){
        console.log("Computer chose Paper!");
        console.log("You lose!");
        cpu_score++;
    } else if (cpu === 2 && choice == 2){
        console.log("Computer chose Paper!");
        console.log("You draw!");
    } else if (cpu === 2 && choice == 3){
        console.log("Computer chose Paper!");
        console.log("You win!");
        player_score++;
    } else if (cpu === 3 && choice == 1){
        console.log("Computer chose Scissors!");
        console.log("You lose!");
        cpu_score++;
    } else if (cpu === 3 && choice == 2){
        console.log("Computer chose Scissors!");
        console.log("You win!");
        player_score++;
    } else if (cpu === 3 && choice == 3){
        console.log("Computer chose Scissors!");
        console.log("You draw!");
    }

    const replay = prompt("Want to play again? y/n");
    if (replay == 'y'){
        console.log("The score is CPU: ", cpu_score, " Player: ", player_score);
        play();
    } else{
        console.log("The score is CPU: ", cpu_score, " Player: ", player_score);
    }
}

play();

//const choice = prompt("Choose Rock, Paper or Scissors. Type 1, 2 or 3");



// while (choice != 1 || choice != 2 || choice != 3){
//     choice = prompt("Please choose between 1, 2 or 3");
// }


