brojacDisplay = document.querySelector('#counter #broj h1');
// console.log(brojacDisplay);
brojacPlus10 = document.querySelector('#deset');
console.log(brojacPlus10);
brojacPlus5 = document.querySelector('#add #pet');
brojacPlus1 = document.querySelector('#add #jedan');
brojacMinus10 = document.querySelector('#remove #-deset');
brojacMinus5 = document.querySelector('#remove #-pet');
brojacMinus1 = document.querySelector('#remove #-jedan');
count = 0

function updateDisplay() {
    brojacDisplay.innerHTML = count;
};
updateDisplay()
brojacPlus1.addEventListener("click", () => {
    count++
    updateDisplay()
})
brojacPlus5.addEventListener("click", () => {
    count = count + 5
    updateDisplay()
})
brojacPlus10.addEventListener("click", () => {
    count = count + 10
    updateDisplay()
})
brojacMinus1.addEventListener("click", () => {
    count--
    updateDisplay()
})
brojacMinus5.addEventListener("click", () => {
    count = count - 5
    updateDisplay()
})
brojacMinus10.addEventListener("click", () => {
    count = count - 10
    updateDisplay()
})