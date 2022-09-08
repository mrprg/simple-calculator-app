// add functions to display to show numbers on screen.
let displayBox = document.querySelector(".display");

let list = document.querySelectorAll(".show-display");
list.forEach(item => {
    item.addEventListener("click", showDisplay)
})

function showDisplay(event) {
    const x = event.target.innerText;
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = x;
    } else if(displayBox.innerHTML.length >= 11) {
        return displayBox.innerHTML = displayBox.innerHTML;
    }
    return displayBox.innerHTML += x;
}

// add event listener to calculate button 
document.querySelector(".calculate").addEventListener("click", calculate);
function calculate() {
    let result = displayBox.innerText;
    displayBox.innerText = eval(result);
};

// for all clear button
document.querySelector(".all-clear").addEventListener("click", allClear);
function allClear() {
    displayBox.innerText = 0;
}

// for clear button to clear one character
document.querySelector(".clear-last").addEventListener("click", clear);
function clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;
    } else { 
        displayBox.innerText = text.substring(0, text.length - 1)
    }
}
