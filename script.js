let container = document.getElementById("sketchpad");
let magicButton = document.getElementById("magic-button");        

function createGrid(gridSize){
    container.innerHTML = "";
    const containerWidth = container.offsetWidth;
    const squareSize = containerWidth / gridSize - 2;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);

            square.addEventListener("mouseover",() =>{
                square.style.backgroundColor = "black"
            })
            setTimeout(() => {
                square.style.backgroundColor = ""
            }, 500)
        }
        const lineBreak = document.createElement("br");
        container.appendChild(lineBreak);
    }

}

magicButton.addEventListener("click", () =>{
    let input = prompt("Enter the number of squares for per side (max 100)");
    let gridSize = parseInt(input);

    if(isNaN(gridSize) || gridSize < 1 || gridSize > 100){
        alert("invalid input. Please enter proper number between 1 and 100")
    }else{
        createGrid(gridSize)
    }
})
// inital grid
createGrid(16)






