const grid = document.querySelector(".grid");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let userInput = parseInt(prompt("Insert size for grid. X by X"));

    if (isNaN(userInput) || userInput > 100) {
        alert("Please enter a valid number smaller than 100.");
        return;
    }
    //let snappedInput = Math.round(userInput / 8) * 8;

    createGrid(userInput);
});

function randomize(){
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
}


function createGrid(size) {
    grid.innerHTML = ""; // Clear existing cells
    const totalCells = size * size;
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        //changing cell color
        cell.addEventListener("mouseover", () => {
            if (!cell.classList.contains("cell-painted")) {
                const red = Math.floor(Math.random() * 255) + 1;
                const green = Math.floor(Math.random() * 255) + 1;
                const blue = Math.floor(Math.random() * 255) + 1;
                cell.classList.add("cell-painted");
                cell.style.backgroundColor = `rgb(${red},${green},${blue}`;
            }
        });
        grid.appendChild(cell);
    }
}

