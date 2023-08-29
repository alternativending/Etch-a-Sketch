const div = document.querySelector('#container');

console.log("ASD")

const numOfSquares = 10;
console.log(numOfSquares)

function createSymmetricalGrid(numOfSquares) {
    console.log(numOfSquares)
    for (let i = 0; i < (numOfSquares); i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        div.appendChild(squareDiv);
    }
}

createSymmetricalGrid(numOfSquares);