function getComputerChoice(){
    randNum=Math.floor(Math.random()*3)+1;
    if(randNum===1){
        return "rock";
    }else if(randNum===2){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function getPlayerChoice(){
    let playerSelection=prompt("Make your selection");
    playerSelection=playerSelection.toLowerCase();
        if (playerSelection=== "rock" || playerSelection==="paper" || playerSelection==="scissors"){
            return playerSelection;
        }else{
            alert("please select between rock, paper and scissors");
            getPlayerChoice();
            
        }
    
}


function singleRound(playerSelection,computerSelection){
    if(playerSelection==="rock" && computerSelection==="paper"){
        console.log("You lose paper beats rock!!");
        return result="computer wins";
    
    }else if(playerSelection==="rock" && computerSelection==="rock"){
        console.log("Its a draw, you both got rocked!");
        return result="draw";

    }else if(playerSelection==="rock" && computerSelection==="scissors"){
        console.log("Congratulaions You win! Rock beats scissors.");
        return result="player wins";
    
    }else if(playerSelection==="paper"&& computerSelection==="rock"){
        console.log("Congratulaions You win! Paper beats rock.");
        return result="player wins";
    
    }else if(playerSelection==="paper" && computerSelection==="scissors"){
        console.log("You lose scissors beat paper.");
        return result="computer wins";
    
    }else if(playerSelection==="paper"&& computerSelection==="paper"){
        console.log("Both paper, Its a draw");
        return result="draw";
    
    }else if(playerSelection==="scissors"&& computerSelection==="scissors"){
        console.log("Both scissors, Its a draw");
        return result="draw";
    
    }else if(playerSelection==="scissors"&& computerSelection==="paper"){
        console.log("Congratulations you win! Scissors beats paper.");
        return result="player wins";
    
    }else if(playerSelection==="scissors"&& computerSelection==="rock"){
        console.log("You lose rock beats scissors");
        return result="computer wins";
    }
}



function fiveGames(){
    let playerScore=0;
    let compScore=0;
    let drawScore=0;
    
    for(let i=0;i<5;i++){
        const playerSelection=getPlayerChoice();
        const computerSelection=getComputerChoice();
        singleRound(playerSelection,computerSelection);
        if (result=="player wins"){
            playerScore++;
            console.log("You win and score is "+playerScore+'-'+compScore);
        }else if (result=="computer wins"){
            compScore++;
            console.log("computer wins and score is "+compScore+'-'+playerScore);

        }else{
            drawScore++;
            console.log("its a draw the score is "+playerScore+"-"+compScore);
        }

        }
        if (playerScore>compScore){
            console.log(`YAY you won with score ${playerScore}-${compScore} with ${drawScore} number of draws.` );
            response_one=prompt("You won!! Wanna play again?");
            response_one=response_one.toLowerCase();
            if(response_one==="yes"){
                fiveGames();
            }else{
                alert("Thankyou for playing");
            }
        
        }else if(playerScore===compScore){
            console.log(`It was a draw with score ${playerScore}-${compScore} and ${drawScore} number of draws. Wanna try again?`);
            response_two=prompt("You Drew!! Wanna play again?");
            response_two=response_two.toLowerCase();
            if(response_two==="yes"){
                fiveGames();
            }else{
                alert("Thankyou for playing");
            }
            
        }
        else{
            response_three=prompt("You lost!! Wanna play again?");
            response_three=response_three.toLowerCase();
            if(response_three==="yes"){
                fiveGames();
            }else{
                alert("Thankyou for playing");
            }

           
    }
    
}