const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    
//start the game
    const startGame = ()=>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click",() => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play Match
    const playMatch = () =>{
        const options= document.querySelectorAll(".options button");
        const playerHand=document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option =>{
            option.addEventListener("click", function(){
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //Here is where we call compare hands
                
                compareHands(this.textContent, computerChoice);
                //Update Images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src=`./images/${computerChoice}.png`;
            });
        });     

    };

    const updateScore =()=>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice)=>{
        const winner = document.querySelector(".winner");
        //we are checking for a tie...
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
        //check for rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player Wins";
                pScore ++;
                updateScore();
                return;
            }else{
                winner.textContent="Computer Wins";
                cScore ++;
                updateScore();
                return;
            }
        }
        //check for paper
        if(playerChoice==="paper"){
            if(computerChoice==="scissors"){
                winner.textContent = "Computer Wins";
                cScore ++;
                updateScore();
                return;
            }else{
                winner.textContent="Player Wins";
                pScore ++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if(playerChoice==="scissors"){
            if(computerChoice==="rock"){
                winner.textContent = "Computer Win";
                cScore ++;
                updateScore();
                return;
            }else{
                winner.textContent="Player Wins";
                pScore ++;
                updateScore();
                return;
            }
        }
    }

    startGame();
    playMatch();
};

//star the game function
game();