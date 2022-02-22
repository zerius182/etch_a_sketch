const ETCH_A_SKETCH = document.querySelector("#screen-container");
const CLEARBUTTON = document.querySelector("#clear-button");
const COLOURBUTTON = document.querySelector("#colour-picker");
const SCRIBBLE = document.querySelector("#scribble");
const MUSIC = document.querySelector("#music");

let active = false;
let colour = "#3a3939";

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

function playMusic(){
    MUSIC.play()
}

