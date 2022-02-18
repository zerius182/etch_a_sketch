const ETCH_A_SKETCH = document.querySelector("#screen-container");
const CLEARBUTTON = document.querySelector("#clear-button");

let active = false;
let colour = "rgb(58, 57, 57)";

function setUpScreen(){
    ETCH_A_SKETCH.style.gridTemplateColumns ="repeat(100, 1fr)";
    ETCH_A_SKETCH.style.gridTemplateRows = "repeat(100, 1fr)";

    for (let i=0; i<10000; i++){
        let gridElement = document.createElement("div");
        gridElement.addEventListener("mouseover", sketch);
        gridElement.addEventListener("mousedown", buttonDown);
        gridElement.addEventListener("mouseup", buttonUp);
        ETCH_A_SKETCH.appendChild(gridElement);
    }
}

