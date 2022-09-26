


let gamesLost = 0;
let gamesWon = 0;
let playedRounds = 0;
let playerChoice ='';
    


 
   let scoreWins = document.querySelector('#scoreboardwin');
   let scoreloss = document.querySelector('#scoreboardloss');
   let scoreFinal = document.querySelector('#scoreboard');
    let playerSelection = document.querySelectorAll('button')

    playerSelection.forEach(button => 
          button.addEventListener('click', choice, {
             capture: false,
  
          }) );

    

          function choice(e){
  
            if(this.classList.value === 'button1') playerChoice = 'Rock';
            if(this.classList.value === 'button2') playerChoice = 'Paper';
            if(this.classList.value === 'button3') playerChoice = 'Scissor';
            e.stopPropagation();
        
            let computerSelection = getComputerChoice();
            let result = document.getElementById('result'); 
            result.innerHTML = determineWinner(computerSelection,playerChoice);
            if (gamesWon === 5 || gamesLost === 5){
                result.innerHTML = game();
                }
        }
          

        function getComputerChoice(){
            let randomNum = Math.floor(Math.random()*10)
            if(randomNum>=7)
            return "Rock";
            else if(randomNum>3)
            return "Paper";
            else 
            return "Scissor";
        }
/* <!--determine wINNER OF GAME-->*/
    function determineWinner(computerSelection,playerSelection){
        
         playerSelection = playerSelection.toLowerCase();
         computerSelection = computerSelection.toLowerCase();


         playedRounds++;
         if(playerSelection === 'rock' && computerSelection === 'scissor'){
            gamesWon++;
            scoreWins.textContent = `Wins: ${gamesWon}`;
            return `Game Result: WIN | Your ${playerSelection} BEATS ${computerSelection}`;

            }
        else if(playerSelection === 'scissor' && computerSelection === 'paper'){
              gamesWon++;
              scoreWins.textContent = `Wins: ${gamesWon}`;
              return `Game Result: WIN | Your ${playerSelection} BEATS ${computerSelection}`;
        }
            else  if(playerSelection === 'paper' && computerSelection === 'rock'){
                gamesWon++;
                scoreWins.textContent=`Wins: ${gamesWon}`;
                return `Game Result: WIN | Your ${playerSelection} BEATS ${computerSelection}`;
            }
         else if (playerSelection === computerSelection)
             return `Tied Game: Your ${playerSelection} is same as ${playerSelection}` ;
         else 
         {
            gamesLost++;
            scoreloss.textContent = `Loss: ${gamesLost}`;
            return `Game Result: LOSE Computer's ${computerSelection} beats ${playerSelection}`
         }
    }
    function game(){
       
        if(gamesWon === 5){
            scoreFinal.textContent = `YOU WON! 
            \n You Won ${gamesWon} games`;
            return 'YOU WON THE GAME --> You Won ' + gamesWon + ' games';
           
        }
        else{
            scoreFinal.textContent = `YOU LOST!
             \n You LOST ${gamesLost} games`;
             
            return 'You LOST THE GAME --> \n You Lost ' + gamesLost + ' games';
        }
    }

    
  
   
