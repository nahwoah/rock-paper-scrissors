let cpu_score = 0;
let player_score = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * 3)+1
}

function getHumanChoice(){
    const input = prompt("Choose Rock, Paper or Scissors. Type 1, 2 or 3");
    const choice = Number(input);
    if (choice < 1 || choice > 3){
        console.log("Please choose between 1, 2 or 3");
        return getHumanChoice();
    }
    return choice;
}

function play(){
    cpu = getComputerChoice();
    choice = getHumanChoice();

    if(choice >= 1 && choice <= 3){
        console.log(cpu + ` and you chose ${choice}`);
    }

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
        console.log("Draw!");
    } else if (cpu === 2 && choice == 3){
        console.log("Computer chose Paper!");
        console.log("You win!");
        player_score++;
    } else if (cpu === 3 && choice == 1){
        console.log("Computer chose Scissors!");
        console.log("You win!");
        player_score++;
    } else if (cpu === 3 && choice == 2){
        console.log("Computer chose Scissors!");
        console.log("You lose!");
        cpu_score++;
    } else if (cpu === 3 && choice == 3){
        console.log("Computer chose Scissors!");
        console.log("Draw!");
    }

    
    if(cpu_score == 3){
        console.log('CPU scored 3! CPU wins!');
        const reset = prompt("Want to keep playing? y/n");
        if (reset == 'y'){
            cpu_score = 0;
            player_score = 0;
            console.clear()
            return play();
        }
    } else if(player_score == 3){
        console.log('Player scored 3! The Player wins!');
        const reset = prompt("Want to keep playing? y/n");
        if (reset == 'y'){
            cpu_score = 0;
            player_score = 0;
            console.clear()
            return play();
        }
    } else{
        return;
    }

    console.log("The score is CPU: ", cpu_score, " Player: ", player_score);
    const replay = prompt("Do you want to play again? y/n");
    if (replay == 'y'){
        return play();
    }
}

play();