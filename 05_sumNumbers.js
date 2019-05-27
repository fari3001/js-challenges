// 1. Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// mocha 05_sumNumbers.js

// 2. Corner cases
// Think about corner cases. We give one in the tests below when
// the players are tied. Can you think of other corner cases?
// Write at least 2 more tests for corner cases and make sure your
// implementation passes those tests.



// function findWinner(players) {
//     // Your code here
//     // Initialize empty array
//     // Get the name and scores of each player
//     // push them onto the array 
//     // Use reduce method to calculate the total of each array 
//     // Use either math.max method or sort to find and display the highest figure 

//     const totalScores = players.reduce((total, player) => {
//         return total + player.scores;
//     }, 0);
//     let highestScore = arr => ( // Or a sort method 
//         arr.length ? Math.max(...arr.filter(isNumber)) : null
//     )
// }
// let str = ""                                             // Set an empty string 
// let temp = []                                            // set the empty array 
// str = prompt("Please enter your name");                  // promting to get name
// temp = prompt("Please enter your scores (comma separated)").split(','); // prompting to get scores




class Player {
    constructor(name, scores) {
        this.name = name
        this.scores = scores
    }
}

let player1 = new Player('James', [200, 100, 85])
let player2 = new Player('Nathan', [55, 90, 86]) // create an obj using the values retrieved from temp 


const player1Total = player1.scores.reduce((total, player) => {
    return total + player;
}, 0);

const player2Total = player2.scores.reduce((total, player) => {
    return total + player;
}, 0);

console.log(`${player1.name} Score: ${player1Total}`)
console.log(`${player2.name} Score: ${player2Total}`)



function findWinner(players) {

    if (player1Total == player2Total) {
        return `${player1.name}`;
    } else if (player1Total > player2Total) {
        return `${player1.name}`;
    } else {
        return `${player2.name}`
    }
}

console.log(findWinner())



// let player = Player.new(str, temp)       // create an obj using the values retrieved from temp 

// let players = []


var assert = require('assert');

describe('findWinner', function () {
    it('Should return the winner when winner is first in array', function () {
        players = [new Player('James', [200, 100, 85]), new Player('Nathan', [55, 90, 86])]
        assert.equal('James', findWinner(players))
    })
    it('Should return the winner when winner is second in array', function () {
        players = [new Player('Nathan', [55, 90, 86]), new Player('James', [200, 100, 85])]
        assert.equal('James', findWinner(players))
    })
    it('Should return the first player when both players are tied', function () {
        players = [new Player('Nathan', [50, 100, 85]), new Player('James', [50, 100, 85])]
        assert.equal('Nathan', findWinner(players))
    })
})