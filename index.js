let rock="rock";
let paper="paper";
let scissors="scissors";

function getComputerChoice(){
    randNum=Math.floor(Math.random()*3)+1;
    if(randNum===1){
        return rock;
    }else if(randNum===2){
        return paper;
    }
    else{
        return scissors;
    }
}

