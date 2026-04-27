let scratchButton = document.getElementById("scratchButton")
let kibbleAmount = document.getElementById("kibbleAmount")
let orangeText = document.getElementById("orangeText")
let orangeAmount = document.getElementById("orangeAmount")

let kibble = 0

let orangeCats = 0
let orangeCatCost = 100

function updateKibbleAmount() {
    kibbleAmount.innerText = "You have " + kibble + " kitty kibble."
}

function clickScratch() {
    kibble++
    updateKibbleAmount()
    
}

function purchaseOrangeCat() {
    if (kibble >= orangeCatCost) {
        kibble -= orangeCatCost
        orangeCatCost = Math.round(orangeCatCost*1.10)
        orangeCats++

        updateKibbleAmount()
        orangeText.textContent = "Hire Orange Cat (Cost: " + orangeCatCost + " kibble)"
        orangeAmount.textContent = "You've hired " + orangeCats + " orange cats."
    }
}

setInterval(function() {
    kibble += orangeCats
    updateKibbleAmount()
}, 1000)
