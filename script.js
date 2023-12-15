let container = document.getElementById("sketchpad");
let magicButton = document.getElementById("magic-button");
let counter = 0;
let counter2 = 0;  
let isColorNeedToBeCleared = false;    

function createGrid(gridSize) {
    container.innerHTML = "";
    
    const containerWidth = container.offsetWidth;
    const squareSize = (containerWidth - ((gridSize - 1) * 2 + 2) ) / gridSize;

    for (let firstIterator = 0; firstIterator < gridSize; firstIterator++) {
        counter2++;
        for (let secondIterator = 0; secondIterator < gridSize; secondIterator++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);
            counter++;

            square.addEventListener("mouseover",() =>{
                square.style.backgroundColor = "black"
            });
        }

        const lineBreak = document.createElement("br");
        container.appendChild(lineBreak);
    }   
}

function setClearColorTimer() {
    isColorNeedToBeCleared = true;
    setTimeout(() => {
        clearColor();
    }, 2000)
}

function resetCleanTimer() {
    isColorNeedToBeCleared = false;
}

function clearColor() {
    if (isColorNeedToBeCleared) {
        const squares = document.querySelectorAll(".square");
        if (squares) {
            squares.forEach((square) => {
                square.style.backgroundColor = "";
            });
        }
    }
}

magicButton.addEventListener("click", () =>{
    let input = prompt("Enter the number of squares for per side (max 100)");
    let gridSize = parseInt(input);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("invalid input. Please enter proper number between 1 and 100");
    } else {
        createGrid(gridSize);
    }
})

createGrid(10);