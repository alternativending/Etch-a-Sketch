const div = document.querySelector('#container');

let numOfSideSquares = 25;

function createSymmetricalGrid(numOfSideSquares) {
    for (let i = 0; i < (numOfSideSquares*numOfSideSquares); i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        div.appendChild(squareDiv);
    }
}

createSymmetricalGrid(numOfSideSquares);

function adjustGridSize(newSize) {
    div.innerHTML = '';
    numOfSideSquares = newSize;

    const squareSize = `${(500) / numOfSideSquares}px`;
    const style = document.createElement('style');
    style.innerHTML = `
        #container {
            grid-template-columns: repeat(auto-fill, ${squareSize});
            grid-template-rows: repeat(auto-fill, ${squareSize});
        }
    `;
    document.head.appendChild(style);

    createSymmetricalGrid(numOfSideSquares); // Recreate the grid with new size
}

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        
        square.style.backgroundColor = 'blueviolet';
    });
});

squares.forEach((square) => {
    square.addEventListener('mouseleave', () => {
        const colorArray = [];
        for (let i = 0; i < 3; i++) {
            let randomFloat = Math.random();
            let result = Math.floor(randomFloat * 256); // Generate a random color value between 0 and 255
            colorArray.push(result);
        }
        square.style.backgroundColor = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
    });
});
//smartphone change below
let isTouching = false;

container.addEventListener('touchstart', () => {
    isTouching = true;
});

container.addEventListener('touchend', () => {
    isTouching = false;
});

container.addEventListener('touchmove', (event) => {
    if (isTouching) {
        const touch = event.touches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);

        if (target && target.classList.contains('square')) {
            const colorArray = [];
            for (let i = 0; i < 3; i++) {
            let randomFloat = Math.random();
            let result = Math.floor(randomFloat * 256);
         colorArray.push(result);
        }
        target.style.backgroundColor = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
    }
}
});
//
const btn1 = document.querySelector('.btn1');

btn1.addEventListener('mouseover', () => {
    btn1.style.backgroundColor = 'blueviolet';
});
btn1.addEventListener('mouseleave', () => {
    btn1.style.backgroundColor = 'rgb(52, 53, 65)';
});

btn1.addEventListener('click', () => {
    newSize = parseInt(prompt("Enter the number of rows you'd like your grid to have:"));
    if (newSize <= 100 || newSize >= 0) {
        adjustGridSize(newSize);
        const squares = document.querySelectorAll('.square');

        squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'blueviolet';
    });
});
        squares.forEach((square) => {
        square.addEventListener('mouseleave', () => {
        const colorArray = [];
        for (let i = 0; i < 3; i++) {
            let randomFloat = Math.random();
            let result = Math.floor(randomFloat * 256); // Generate a random color value between 0 and 255
            colorArray.push(result);
        }
        square.style.backgroundColor = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
    });
});

        const reset = document.querySelector('.btn2');

        reset.addEventListener('click', () => {
        squares.forEach((square) => {
        square.style.backgroundColor = 'rgb(32, 33, 35)';
        square.style.border = '1px solid black';
    });
});
// smartphone change below
        let isTouching = false;

        container.addEventListener('touchstart', () => {
            isTouching = true;
        });

        container.addEventListener('touchend', () => {
            isTouching = false;
        });

        container.addEventListener('touchmove', (event) => {
            if (isTouching) {
                const touch = event.touches[0];
                const target = document.elementFromPoint(touch.clientX, touch.clientY);
        
                if (target && target.classList.contains('square')) {
                    const colorArray = [];
                    for (let i = 0; i < 3; i++) {
                    let randomFloat = Math.random();
                    let result = Math.floor(randomFloat * 256);
                 colorArray.push(result);
                }
                target.style.backgroundColor = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
            }
        }
});
//
    }
    else if (newSize < 0) {
        alert("Please enter positive numbers only")
    }
    else if (newSize > 100) {
        alert("Please don't enter numbers higher than 100")
    }
});

const reset = document.querySelector('.btn2');

reset.addEventListener('click', () => {
    squares.forEach((square) => {
        square.style.backgroundColor = 'rgb(32, 33, 35)';
        square.style.border = '1px solid black';
    });
});

reset.addEventListener('mouseover', () => {
    reset.style.backgroundColor = 'blueviolet';
});
reset.addEventListener('mouseleave', () => {
    reset.style.backgroundColor = 'rgb(52, 53, 65)';
});


