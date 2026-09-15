const container = document.querySelector("#container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const input = prompt("Enter a number (1 - 100):");
    const num = Number(input);

    if (!num || num <= 0 || num > 100) {
        alert("Invalid input, enter a number between 1 - 100");
        return;
    }

    createGrid(num);
});

function createGrid(size) {
    // 1. Wipe out any existing grid squares before drawing a new one
    container.innerHTML = "";

    // 2. For an NxN grid, you need size * size squares (e.g. 16x16 = 256)
    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        const flex_item = document.createElement("div");
        flex_item.classList.add("grid-square");
        container.appendChild(flex_item);
    }
}

container.addEventListener("mouseover", (e) => {
    let target = e.target;

    target.style.backgroundColor = "red";
});

container.addEventListener("mouseout", (e) => {
    let target = e.target;

    target.style.backgroundColor = "rgb(255, 255, 0)";
});