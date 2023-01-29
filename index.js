// function increment (){
    
//     document.getElementById("count").innerText = 1
// }

// function logNumber(){
//     console.log(43)
// }

// logNumber()
// logNumber()
// logNumber()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime (){
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// logLapTime()

// let lapsCompleted = 0

// function lapsCounter (){
//     lapsCompleted = lapsCompleted +1
//     console.log(lapsCompleted)
// }

// lapsCounter()
// lapsCounter()
// lapsCounter()


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0
let countEl = document.getElementById("count")
let saveEl = document.getElementById("message")
function increment(){
    count +=  1
    countEl .innerText = count
}



function save(){
    let countDash = count + " - " 
    saveEl.textContent += countDash
    countEl.textContent = 0
    count = 0
}
 
