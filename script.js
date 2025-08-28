console.log("alerrrt");

let choices = ["rock", "paper", "scissor"]


getOutcome(getHumanChoice(), getComputerChoice());

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

    console.log(human);
    console.log(computer);
    return console.log(annouceOutcome);
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