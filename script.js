console.log("Hello World"); //added to check if external js file is correctly linked in html

//Code for rock paper scissors game

//plan below 

/*

What is needed:
    Function to computer's choice
        random choice between, equal chance each
            rock 
            paper
            scissors
    Human's choice 
        choice accepted as typing rock/paper/scissors case insensitive
        other choices not accepted
    Function to compare the choices
        rock wins with scissors
        paper wins with rock
        scissors win with paper
    Players scores counter

    Output who won in form of a text e. g. 

        "Computer won"

        "You Won! Congratulations!!!"


*/

// END of plan above


//pseudocode below 

/*
    // Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.

    SET computerScore to 0
    SET humanScore to 0
    SET roundCounter to 0 


    FUNCTION getComputerChoice
       randomNumber from three: [1,2,3]
        
        IF  randomNumber equal to 1
            SET computerChoice to rock
        ELSE IF randomNumber equal to 2
            SET computerChoice to paper
        ELSE IF randomNumber equal to 3
            SET computerChoice to scissors    
        END_IF

        
    ENDFUNCTION      

    FUNCTION getHumanChoice
        GET humanChoice with an input "Type your choice: rock, paper or scrissors"

        
        SET humanChoice to CALL lowercase humanChoice

        IF humanChoice is not equal to rock or paper or scissors
            LOG "Wrong choice! Choose one of accepted options! Type: rock, paper or scissors"
        ELSE
            PRINT "Your choice: " + humanChoice
        END_IF
        
    ENDFUNCTION

    FUNCTION playRound (humanChoice, computerChoice)
        PRINT "Round number: " + roundCounter

        SET computerChoice to CALL getComputerChoice

        SET humanChoice to CALL getHumanChoice

        IF humanChoice equals computerChoice
            PRINT "It's a tie!"
        ELSE IF humanChoice equals rock and computerChoice equals scissors
            ADD 1 to humanScore

            PRINT "Rock beats scissors! You won this round!"
        
        ELSE IF humanChoice equals scissors and computerChoice equals paper
            ADD 1 to humanScore

            PRINT "Scissors beats paper! You won this round!"

        ELSE IF humanChoice equals paper and computerChoice equals rock
            ADD 1 to humanScore

            PRINT "Paper beats rock! You won this round!"

        ELSE IF computerChoice equals rock and humanChoice equals scissors
            ADD 1 to humanScore

            PRINT "Rock beats scissors! You lose!"
        
        ELSE IF computerChoice equals scissors and humanChoice equals paper
            ADD 1 to humanScore

            PRINT "Scissors beats paper! You lose!"

        ELSE IF computerChoice equals paper and humanChoice equals rock
            ADD 1 to humanScore

            PRINT "Paper beats rock! You lose!"

        END_IF


        ADD 1 to roundCounter

        PRINT score "COMPUTER SCORE: " + computerScore + "YOUR SCORE: " + humanScore

    END_FUNCTION


    FUNCTION playGame ()
    
        CALL playRound 5 times

        IF humanScore > computerScore
            PRINT "You won! Congrats!!!"
        ELSE IF humanScore < computerscore
            PRINT "You lost! Computer wins!"


    END_FUNCTION


    CALL playGame()

*/

// END of pseudocode above

// THE FINAL CODE

console.log("Let the game begin!");
console.log("Rock, paper, scissors indeed!");

let computerScore = 0;
let humanScore = 0;
let roundCounter = 1;

function getComputerChoice() {
    let x = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(0)) + Math.ceil(0));

    if (x == 0) {
        return "rock";
    } else if (x == 1) {
        return "paper";
    } else if (x == 2) {
        return "scissors";
    }
}

/* function getHumanChoice() {
    let choice = prompt("Type your choice: rock, paper or scrissors").toLowerCase();

    while (choice != "rock" && choice != "paper" && choice != "scissors" ) {
        alert("Wrong choice! Choose one of accepted options! Type: rock, paper or scissors");

        choice = prompt("Type your choice: rock, paper or scrissors").toLowerCase();
    }
    console.log(choice);

    return choice;
} */

function roundBanner() {
    const div = document.createElement("div");
    div.classList.add("round_div");

    div.textContent = "ROUND: " + roundCounter;
    const p = document.createElement("p");
    p.classList.add("round_p");
    p.textContent = "SCORE | " + "Computer: " + computerScore + " Human: " + humanScore;
    const body = document.querySelector("body");
    body.appendChild(div);
    body.appendChild(p);
}

function removeOldBanner() {
    const div = document.querySelector(".round_div");
    const p = document.querySelector("round_p");
    const body = document.querySelector("body");
}

function playRound(humanChoice, computerChoice) {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    
    if (computerScore <= 5 && humanScore <= 5) {
        roundBanner();
    } else {
        div.textContent = "THE END!!!";
    }
    
    if (computerScore === 5) {
        div.textContent = "THE END Computer WON!!!";
        body.appendChild(div);
    } else if (humanScore === 5) {
        div.textContent = "THE END You WON!!!";
        body.appendChild(div);
    }
    
    

    console.log("Round number: " + roundCounter);

    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    computerChoice = getComputerChoice();

    humanChoice = choice;

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice == rock && computerChoice == scissors ) {
        console.log("Rock beats scissors! You won this round!");

        humanScore += 1;
    } else if (humanChoice == scissors && computerChoice == paper ) {
        console.log("Scissors beat paper! You won this round!");

        humanScore += 1;
    } else if (humanChoice == paper && computerChoice == rock ) {
        console.log("Paper beats rock! You won this round!");

        humanScore += 1;
    } else if (computerChoice == rock && humanChoice == scissors ) {
        console.log(" HAHAHA...");
        console.log(" Rock beats scissors! You lose this round!");

        computerScore += 1;
    } else if (computerChoice == scissors && humanChoice == paper ) {
        console.log(" HAHAHA...");
        console.log(" Scissors beat paper! You lose this round!");

        computerScore += 1;
    } else if (computerChoice == paper && humanChoice == rock ) {
        console.log(" HAHAHA...");
        console.log(" Paper beats rock! You lose this round!");

        computerScore += 1;
    }

    roundCounter += 1;

    console.log("SCORE     Computer: " + computerScore + " You: " + humanScore);
}

function playGame() {

    while (roundCounter < 6) {
        playRound();
    }


    if (humanScore > computerScore) {
        console.log("You won! CONGRATS DUDE!");
    } else if (computerScore > humanScore) {
        console.log("You lost! Maybe next time!");
    }

    
}
/* let btn = document.querySelector(".rock-class");

btn.addEventListener("click", () => {
    console.log("działa");
}); */



/* function getHumanChoice() {
    let choice;
    
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            choice = "rock";
        })
    })
    
    return choice;
} */

let choice;
    
const buttons = document.querySelectorAll("button");
    
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        choice = (button.id);
        let humanChoice = choice;
        playRound();
    })
 })
    
    


/* playGame(); */