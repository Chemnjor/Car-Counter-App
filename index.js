let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let counter = count + " - "
    saveEl.textContent += counter
    countEl.textContent = 0 //after saveing the initial count it resets
    count = 0
}
