//console.log("Hello world!");

let rock = 1;
let paper = 2;
let scrissors = 3;

function getComputerChoice(){
    

    return Math.floor(Math.random() * 3)+1
}

//console.log(cpu());

const choice = prompt("Choose Rock, Paper or Scissors. Type 1, 2 or 3");
cpu = getComputerChoice()

// while (choice != 1 || choice != 2 || choice != 3){
//     choice = prompt("Please choose between 1, 2 or 3");
// }

if (cpu === 1 && choice === 1){
    console.log("Computer chose Rock!");
    console.log("Its a draw!");
} else if (cpu === 1 && choice === 2){
    console.log("Computer chose Rock!");
    console.log("You win!");
} else if (cpu === 1 && choice === 3){
    console.log("Computer chose Rock!");
    console.log("You lose!");
} else if (cpu === 2 && choice === 1){
    console.log("Computer chose Paper!");
    console.log("You lose!");
} else if (cpu === 2 && choice === 2){
    console.log("Computer chose Paper!");
    console.log("You draw!");
} else if (cpu === 2 && choice === 3){
    console.log("Computer chose Paper!");
    console.log("You win!");
} else if (cpu === 3 && choice === 1){
    console.log("Computer chose Scissors!");
    console.log("You lose!");
} else if (cpu === 3 && choice === 2){
    console.log("Computer chose Scissors!");
    console.log("You win!");
} else if (cpu === 3 && choice === 3){
    console.log("Computer chose Scissors!");
    console.log("You draw!");
}
