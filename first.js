let userScore = 0;
let compScore = 0;

const signs = document.querySelectorAll(".action");
const msg = document.querySelector("#msg");
const userScoreNum = document.querySelector("#user-score");
const compScoreNum = document.querySelector("#comp-score");

const genCompChoice = () =>{
const options= ["rock" ,"paper", "scissors"];
const rankIdx= Math.floor(Math.random() * 3);
return options[rankIdx];
}
const drawGame = () =>{
    console.log("Game was Drawn.");
    msg.innerText = "Game was Drawn. Play Again";
    msg.style.backgroundColor = "black";
}
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScoreNum.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScoreNum.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin, userChoice, compChoice);
    }
};

signs.forEach((action) =>{
    action.addEventListener("click", () =>{
        const userChoice = action.getAttribute("id");
        playGame(userChoice);
        
    });
});