'use-strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //to get the value::
// //to give our own value::
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);



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


//click event::
document.querySelector('.check').addEventListener('click', function () {
    // const guess = document.querySelector('.guess').value;    //this guess value will be a string
    // console.log(guess);

    //so we have to convert the above code into a number:: 
    const guess = +document.querySelector('.guess').value;
    // console.log(guess);

    //If there is no guess::
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';
    }

    //When the player wins
    else if(guess === secretNumber){

        //Congratulating the player:
        document.querySelector('.message').textContent = 'You Guessed the Correct Number ';

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
    //When you guess a higher no
    else if(guess > secretNumber){

        if(score > 1){
            
            document.querySelector('.message').textContent = 'Your Guess is too High!';
            
            score = score-1;
            document.querySelector('.score').textContent = score;
            
        }
        else{
            document.querySelector('.message').textContent = 'You lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    }
    //When you guess a lower no
    else if(guess < secretNumber){

        if(score > 1){

            document.querySelector('.message').textContent = 'Your Guess is too Low!';
    
            score = score-1;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the Game';
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
    document.querySelector('.message').textContent = 'Start Guessing...';
    
    //Resetting the score::
    document.querySelector('.score').textContent = score;

    //Resetting the input value::
    document.querySelector('.guess').value = '';


    //Restting the bg color:
    document.querySelector('body').style.backgroundColor = '#222';

    //Resetting the width of the box:
    document.querySelector('.number').style.width = '15rem';

 
})