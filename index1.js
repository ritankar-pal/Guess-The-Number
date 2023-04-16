'use-strict';
//Refactoring the code::



//Defining the secret number::
let secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = secretNumber;
// console.log(typeof secretNumber);


//Defining the score::
//state variable
let score = 20;
document.querySelector('.score').textContent = score;


//Initially High Score will be = 0;
let highScore = 0;


//function for displaying the message: 
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}



//click event::
document.querySelector('.check').addEventListener('click', function () {

    //so we have to convert the above code into a number:: 
    const guess = +document.querySelector('.guess').value;
    // console.log(guess);

    //If there is no guess::
    if(!guess){
        displayMessage('No Number!');
    }

    //When the player wins
    else if(guess === secretNumber){

        //Congratulating the player:
        displayMessage('You Guessed the Correct Number');

        //Displaying the secret number when the player wins:
        document.querySelector('.number').textContent = secretNumber;

        //changing the bg color:
        document.querySelector('body').style.backgroundColor = '#60b347';

        //changing the width of the box:
        document.querySelector('.number').style.width = '30rem';


        //High Score: 
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    
    //When the guess is different: 
    else if(guess !== secretNumber){

        if(score > 1){

            displayMessage(guess > secretNumber ? 'Your Guess is too High!': 'Your Guess is too Low!');
            score = score-1;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('You lost the Game');
            document.querySelector('.score').textContent = 0;
        }
    }
})



//Impleting to restart the game by pressing the 'again' button:: 
document.querySelector('.again').addEventListener('click', function(){

    score = 20; 
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = secretNumber;

    //Resetting::
    displayMessage('Start Guessing...');
    
    //Resetting the score::
    document.querySelector('.score').textContent = score;

    //Resetting the input value::
    document.querySelector('.guess').value = '';


    //Restting the bg color:
    document.querySelector('body').style.backgroundColor = '#222';

    //Resetting the width of the box:
    document.querySelector('.number').style.width = '15rem';

 
})