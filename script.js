let container = document.getElementById("sketchpad");
        
let gridSize = 16;
let squareSize = 22;

container.style.width = gridSize * squareSize + "px";



for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                const square = document.createElement("div");
                square.classList.add("square");
                container.appendChild(square);
            }
            const lineBreak = document.createElement("br");
            container.appendChild(lineBreak);
        }