"user strict";

const prompt = require('prompt-sync')();

class player {
    constructor(name) {
        this.name = name;
        this.count = 0;
        this.gestures = {
            //rock
            0: {
                name: 'rock',
                weakness: ['paper', 'spock']
            },
            //paper
            1: {
                name: 'paper',
                weakness: ['scissors', 'lizard']
            },
            //scissors
            2: {
                name: 'scissors',
                weakness: ['rock', 'spock']
            },
            //lizard
            3: {
                name: 'lizard',
                weakness: ['rock', 'scissors']
            },
            //spock
            4: {
                name: 'spock',
                weakness: ['lizard', 'paper']
            },
        }
        this.hand = this.gestures.rock;
    }

    chooseGesture(player,hand = prompt('')) {
        switch (hand) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
                return (this.hand = this.gestures[hand])
            case 'q':
            case null:
            case 'quit':
                console.log('Thanks for playing!');
                process.exit()
            default:
                console.log("invalid input!")
                console.log(`\n${player.name} : Please choose a hand\n0=Rock\n1=Paper\n2=Scissors\n3=Lizard\n4=Spock\n`)
                return (this.chooseGesture(player));
        }

    }

}

module.exports = player