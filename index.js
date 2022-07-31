const playerChoice=['rock','paper','scissors'];
let playerScore=0;
let compScore=0;




function randomCompChoice(){
    randNum=Math.floor(Math.random()*3)+1;
    if(randNum===1){
        return playerChoice[0];
    }else if(randNum===2){
        return playerChoice[1];
    }
    else{
        return playerChoice[2];
    }
}
function getPlayerChoice(playerSelection){
    const container=document.querySelector("#container");
        const content=document.createElement("div");
        content.textContent="You chose: "+playerSelection;
        content.classList.add("player-choice")
        container.appendChild(content);
       
}

function getComputerChoice(compSelection){
    const container=document.querySelector("#container");
        const content_two=document.createElement("div");
        content_two.textContent="Computer chose: "+compSelection;
        content_two.classList.add("comp-choice");
        container.appendChild(content_two);
        
}

const getSingleRound=(result)=>{
    const container= document.querySelector("#container");
    const content_three=document.createElement("div");
    content_three.textContent=result;
    container.appendChild(content_three);

}

const displayGameScore=(score)=>{
    const container=document.querySelector("#container");
    const content_four=document.createElement("div");
    content_four.textContent=score;
    container.appendChild(content_four);
}
    



function singleRound(playerSelection,computerSelection){
    switch(playerSelection){
        case playerChoice[0]:
            if (computerSelection===playerChoice[0]){
                console.log("Its a draw. Both chose rock.");
                return result="Draw!! "
            }else if(computerSelection===playerChoice[1]){
                console.log("You Lose. Paper beats rock.");
                return result="Computer won."
            }else if (computerSelection===playerChoice[2]){
                console.log("You win. Rock beats scissors")
                return result="Player won."
            }
            break;
        
        case playerChoice[1]:
            if (computerSelection===playerChoice[1]){
                console.log("Its a draw. Both chose paper.");
                return result="Draw!! "
            }else if(computerSelection===playerChoice[0]){
                console.log("You win. Paper beats rock.");
                return result="Player won."
            }else if (computerSelection===playerChoice[2]){
                console.log("You Lose. Scissors beats paper")
                return result="Computer won."
            }
            break;

        case playerChoice[2]:
            if (computerSelection===playerChoice[2]){
                console.log("Its a draw. Both chose scissors.");
                return result="Draw!! "
            }else if(computerSelection===playerChoice[0]){
                console.log("You Lose. Rock beats scissors.");
                return result="Computer won."
            }else if (computerSelection===playerChoice[1]){
                console.log("You win. Scissors beats paper")
                return result="Player won."
            }
            break;
    default:
        console.log("not working")
            
    }
    }
    
function getWinner(singleResult){
    if (singleResult==="Player won."){
        playerScore=playerScore+1;
        console.log("player score: "+playerScore)
        return `Your score is ${playerScore}`
    }else if(singleResult==="Computer won."){
        compScore=compScore+1;
        console.log("computer score: "+compScore)
        return `Computer Score is: `+compScore
    }

      


}


// function fiveGames(){
//     let playerScore=0;
//     let compScore=0;
//     let drawScore=0;
    
//     for(let i=0;i<5;i++){
//         const playerSelection=getPlayerChoice();
//         const computerSelection=getComputerChoice();
//         singleRound(playerSelection,computerSelection);
//         if (result=="player wins"){
//             playerScore++;
//             console.log("You win and score is "+playerScore+'-'+compScore);
//         }else if (result=="computer wins"){
//             compScore++;
//             console.log("computer wins and score is "+compScore+'-'+playerScore);

//         }else{
//             drawScore++;
//             console.log("its a draw the score is "+playerScore+"-"+compScore);
//         }

//         }
//         if (playerScore>compScore){
//             console.log(`YAY you won with score ${playerScore}-${compScore} with ${drawScore} number of draws.` );
//             response_one=prompt("You won!! Wanna play again?");
//             response_one=response_one.toLowerCase();
//             if(response_one==="yes"){
//                 fiveGames();
//             }else{
//                 alert("Thankyou for playing");
//             }
        
//         }else if(playerScore===compScore){
//             console.log(`It was a draw with score ${playerScore}-${compScore} and ${drawScore} number of draws. Wanna try again?`);
//             response_two=prompt("You Drew!! Wanna play again?");
//             response_two=response_two.toLowerCase();
//             if(response_two==="yes"){
//                 fiveGames();
//             }else{
//                 alert("Thankyou for playing");
//             }
            
//         }
//         else{
//             response_three=prompt("You lost!! Wanna play again?");
//             response_three=response_three.toLowerCase();
//             if(response_three==="yes"){
//                 fiveGames();
//             }else{
//                 alert("Thankyou for playing");
//             }

           
//     }
    
// }



document.querySelectorAll(".btn").forEach(button=>{
    button.addEventListener("click",(e)=>{
        let result;
        let playerChoice=(button.textContent);
        playerChoice=playerChoice.toLowerCase();
        let compChoice=randomCompChoice();
        let singleResult=singleRound(playerChoice,compChoice);
        let gameScore=getWinner(singleResult);
       
      
    

        
        

      

        displayGameScore(gameScore);
        getPlayerChoice(playerChoice);
        getComputerChoice(compChoice);
        getSingleRound(singleResult);
        
        
        
        
        
    })
})

