let  userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = ()=>{
    //Rock , paper,scissoer
    const option = ["Rock","Paper","Scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};

const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText=`You Win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        compScore ++;
        compScorePara.innerText = compScore;
        msg.innerText=`You Lose!  ${compChoice} Beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const drawGame = () => {
    msg.innerText="Game Was Draw Play Again"
    msg.style.backgroundColor = "antiquewhite";
};
const playGame = (userChoice) =>{
    console.log("user Choice = ",userChoice);
    // Gernerate computer Choice
    const compChoice = genCompChoice(); 
    console.log("computer Choice = ",compChoice);


    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==="Rock"){
            userWin = compChoice ==="Paper"?false:true;
        }else if(userChoice ==="Paper"){
            userWin = compChoice ==="scissors"?false:true;
        }else{
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
        }
        
    
};

    choices.forEach((choice) =>{
        choice.addEventListener("click",() =>{
           const userChoice = choice.getAttribute("id");
           playGame(userChoice);
        })
    })