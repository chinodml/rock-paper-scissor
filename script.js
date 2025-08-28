let choices = ["rock", "paper", "scissor"]
let humanPoints = 0;
let computerPoints = 0;
let gameRound = 1;

console.log("Human Points: ", humanPoints);
console.log("Computer Points: ", computerPoints);

pointCounter();


function pointCounter(){
    gameRoundNumber = console.log(`Round Number ${gameRound++}`)
    let outcome = getOutcome(getHumanChoice(), getComputerChoice());
    let announcePrompt 
    
    if(outcome === "win"){
        humanPoints++;
        announcePrompt = "You Win!"
    } else 
    if (outcome === "lose"){
        computerPoints++
        announcePrompt = "Computer Wins!"
    } else {announcePrompt = "Meh"} 

    console.log(announcePrompt);
    console.log("Human Points: ", humanPoints);
    console.log("Computer Points: ", computerPoints);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
    continueGame();
}


function continueGame() {
    if(confirm("Press 'OK' to continue...")) {pointCounter()};

}







function getOutcome(human, computer) {
    let annouceOutcome;

    if(human === computer) {annouceOutcome = "tie"}

    else if(
        (human === "rock" && computer === "scissor") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissor" && computer === "paper")
    ) {annouceOutcome = "win"}

    else if(
        (human === "rock" && computer === "paper") ||
        (human === "paper" && computer === "scissor") ||
        (human === "scissor" && computer === "rock")
    ) {annouceOutcome = "lose"}

    else {annouceOutcome = "Invalid choice"}

    console.log(`[You] ${human} ⚔️ ${computer} [Comp]`);
    return annouceOutcome;
}




function getHumanChoice() {
    getHumanChoicePrompt = prompt("Pick your gesture: " + choices.join(", ")).toLowerCase();

    if(!choices.includes(getHumanChoicePrompt)) {
        alert("You've got choices already, but you chose to be dumb?")
        return getHumanChoice();
    }
    return getHumanChoicePrompt;
}



function getComputerChoice() {
    let computerGet
    const min = 1;
    const max = 3;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    switch(randomNum) {
        case 1: computerGet = choices[0]; break;
        case 2: computerGet = choices[1]; break;
        case 3: computerGet = choices[2]; break;
        default:
            console.log("sumthn wong mf!!!!");
            break;
    }
    return computerGet;
    
}