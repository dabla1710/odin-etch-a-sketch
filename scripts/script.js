const gridContainer = document.querySelector("#canvas");

const gridSize = 16;


rows: for (let i = 0; i < gridSize; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    pixels: for (let j = 0; j < gridSize; j++) {
        let newPixel = document.createElement("div");
        newPixel.classList.add("pixel");
        newPixel.textContent = i*gridSize + j+1;
        newPixel.addEventListener("hover", () => newPixel.style.backgroundColor = "black");
        rowDiv.appendChild(newPixel);
    }

    gridContainer.appendChild(rowDiv);
}

function changePixelBackground(element) {
    element.style.backgroundColor = "black";
}