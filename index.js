let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0 // initializing

function increment() {
    
    count = count + 1
    console.log(count)
    countEl.innerText = count
}
increment()
