const grid = document.querySelector(".grid");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let userInput = parseInt(prompt("Insert size for grid. X by X"));

    if (isNaN(userInput) || userInput > 100) {
        alert("Please enter a valid number smaller than 100.");
        return;
    }
    createGrid(userInput);
});

function createGrid(size) {
    grid.innerHTML = ""; // Clear existing cells
    const totalCells = size * size;

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // Initialize data attributes
        cell.dataset.darkness = "0";
        cell.dataset.colored = "false";

        cell.addEventListener("mouseover", () => {
            if (cell.dataset.colored === "false") {
                // First hover — assign random color
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);

                cell.dataset.red = red;
                cell.dataset.green = green;
                cell.dataset.blue = blue;
                cell.dataset.colored = "true";

                cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            } else {
                // Subsequent hovers — darken the original color
                let darkness = parseInt(cell.dataset.darkness);
                if (darkness >= 10) return;

                darkness++;
                cell.dataset.darkness = darkness;

                const r = Math.floor(cell.dataset.red * (1 - darkness * 0.2));
                const g = Math.floor(cell.dataset.green * (1 - darkness * 0.2));
                const b = Math.floor(cell.dataset.blue * (1 - darkness * 0.2));

                cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        });

        grid.appendChild(cell);
    }
}

