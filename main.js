"use strict";

const game = require('./game.js')
let mainGame = new (game)


function gameTime() {
    mainGame.chooseGame();
    mainGame.roundWinner()
    
    if (mainGame.playAgain()){
        return(gameTime())
    }
    else{
        console.log("Thanks for playing!")
    }
}

gameTime()