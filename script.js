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
    }
    return displayBox.innerHTML += x;
}

// add event listener to calculate button 
document.querySelector(".calculate").addEventListener("click", calculate);
function calculate() {
    let result = displayBox.innerText;
    displayBox.innerText = eval(result);
};
