
    let score = 0;
function play(playerChoice){
    const choice = ['rock','paper','scissor'];

    let res = document.getElementById("result");

    let keeper = document.getElementById("counter");

    const computerChoice = choice[Math.floor(Math.random()*3)];

     let resultText = "";

    if(playerChoice === computerChoice)
    {
        resultText = `its a draw!!! 
        you chose ${playerChoice}
        computer chose ${computerChoice}`
    }
    else if(   
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper'))
    {
        resultText = `You win 
        you chose ${playerChoice}
        computer chose ${computerChoice}`
        score++;
        if(score > 2){
        res.innerHTML = "GAME OVER NOW FUCK OFF!!!"
        }

    }
    else
    {
        resultText = `You lose 
         you chose ${playerChoice}
        computer chose ${computerChoice}`        
    }
    res.innerText = resultText;

    document.getElementById("scr").innerText = score;

}

