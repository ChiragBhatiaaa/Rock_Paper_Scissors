const game = () => {
    let pscore = 0;
    let cscore = 0; 

    const startgame = () => {
       const playbtn = document.querySelector('.intro button');
       const introscreen = document.querySelector('.intro');
       const play =  document.querySelector('.play');  

       playbtn.addEventListener("click", () => {
            introscreen.classList.add("fadeOut");  
            play.classList.add("fadeIn");
       });
    };
    const playmatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerhand = document.querySelector(".player-hand");
        const computerhand = document.querySelector(".computer-hand");
        
        const computeroptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
          option.addEventListener("click", function (){
            const computernumber = Math.floor(Math.random() * 3);
            const computerchoice = computeroptions[computernumber];
            
            computerhands(this.textContent, computerchoice)

            playerhand.src = `${this.textContent}.png`;
            computerhand.src = `${computerchoice}.png`;
          });
        });             
    };

    const updatescore = () => {
        const playerscore = document.querySelector('.player p');
        const computerscore = document.querySelector('.computer p');
        playerscore.textContent = pscore;
        computerscore.textContent = cscore;
    } 

    const computerhands = (playerchoice, computerchoice) =>{
        const winner = document.querySelector('.winner');
        if(playerchoice===computerchoice){
            winner.textContent = 'It is a tie';
            return;
        }
        if(playerchoice==='rock'){
            if(computerchoice === 'scissors'){
                winner.textContent = 'player wins'
                pscore++;
                updatescore();
                return;
            }else{
                winner.textContent = 'computer wins'
                cscore++;
                updatescore();
                return;
            }
        }
        if(playerchoice==='paper'){
            if(computerchoice === 'scissors'){
                winner.textContent = 'computer wins'
                cscore++;
                updatescore();
                return;
            }else{
                winner.textContent = 'player wins'
                pscore++;
                updatescore();
                return;
            }
        }
        if(playerchoice==='scissors'){
            if(computerchoice === 'paper'){
                winner.textContent = 'player wins'
                pscore++;
                updatescore();
                return;
            }else{
                winner.textContent = 'computer wins'
                cscore++;
                updatescore();
                return;
            }
        }
    }


    startgame(); 
    playmatch();
};  


game();