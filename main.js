let scratchButton = document.getElementById("scratchButton")
let kibbleAmount = document.getElementById("kibbleAmount")
let orangeText = document.getElementById("orangeText")
let orangeAmount = document.getElementById("orangeAmount")

let baseCosts = {100: "orangeCat", 500: "calicoCat", 1000: "tabbyCat", 5000: "siameseCat", 100000: "lionCat" }
let scratchPower = 1

let kibble = 0
let prestigeLevel = 0

let orangeCats = 0
let orangeCatCost = 100
let calicoCats = 0
let calicoCatCost = 500
let calicoPower = 0

// TODO
//
// implement a prestige system where you can reset your progress for a permanent boost
// this will increase the "scratch power" of each click by 5x each prestige level
// it will also increase the base kibble gain of each hired cat by some percentage each prestige level
// You can only prestige once you reach a certain amount of kibble, and the required amount will increase with each prestige level
// the prestige level will be displayed on the page, and the required amount of kibble for the next prestige will also be displayed
// the prestige button will only light up once you reach the required amount of kibble for the next prestige

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
        orangeAmount.textContent = ": " + orangeCats
    }
}

function purchaseCalicoCat() {
    if (kibble >= calicoCatCost) {
        kibble -= calicoCatCost
        calicoCatCost = Math.round(calicoCatCost*1.10)
        calicoCats++
        calicoPower+=5

        updateKibbleAmount()
        calicoText.textContent = "Hire Calico Cat (Cost: " + calicoCatCost + " kibble)"
        calicoAmount.textContent = ": " + calicoCats
    }
}

function prestige() {
    if (kibble >= 10000000){
        // make button for prestige light up and clickable
        prestigeLevel++
        scratchPower *= 5
        orangeCats = 0
        orangeCatCost = 100
        kibble = 0
        updateKibbleAmount()
        orangeText.textContent = "Hire Orange Cat (Cost: " + orangeCatCost + " kibble)"
        orangeAmount.textContent = "You've hired " + orangeCats + " orange cats."
    }
}

setInterval(function() {
    kibble += (orangeCats + calicoPower)
    updateKibbleAmount()
}, 1000)
