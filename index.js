const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let secretNumber = 1;

function checkGuess(num){
    if(Number(num) > secretNumber){
        console.log('Too high')
        return false;
        
    }else if(Number(num) < secretNumber){
        console.log('Too low')
        return false;
        
    }else if(Number(num) === secretNumber){
        console.log('Correct!')
        return true;
        
    }
}

function askGuess() {
    rl.question('Enter a guess: ', (answer) => {
        if(checkGuess(answer) === false){
            askGuess()
        }else{
            rl.close()
        }
    });   
};

askGuess()







    