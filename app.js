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
            option.addEventListener("click", ()=>{
                //Computer choice
                const computerNumber = Math.floor (Match.random() * 3);
                const computerChoise = computerOptions[computerNumber];
                console.log(computerChoise);
            });
        });     

    };

    startGame();
    playMatch();
};

//star the game function
game();