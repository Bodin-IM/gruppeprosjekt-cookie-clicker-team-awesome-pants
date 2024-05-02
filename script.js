if (localStorage.getItem("data") === null) {
    data = {
        Cartis: 0,
        multiplier: 1,
        multiplierCost: 25,
        upgradecount: 0
    }
    localStorage.setItem("data", JSON.stringify(data))
} else {
    data = JSON.parse(localStorage.getItem("data"))
}




console.log(data)

let carti = document.getElementById("PlayboiCarti")
let save = document.getElementById("SaveButton")
let wipe = document.getElementById("WipeButton")
let DisplayCarti = document.getElementById("DisplayCarti")
let Upgradeclicker = document.getElementById("UpgClicker")
let displayUpgradecost = document.getElementById("displayUpgradecost")

carti.addEventListener("click", cartisClicked)
Upgradeclicker.addEventListener("click", Upgradeclickerclicked)
save.addEventListener("click", saveClicked)
wipe.addEventListener("click", wipeClicked)

let cartis = data.Cartis 
let multiplier = data.multiplier
let multiplierCost = data.multiplierCost
let upgradecount = data.upgradecount

function cartisClicked(){
    cartis = cartis + multiplier
    DisplayCartisamt()
}
const Fwæ_sound = new Audio();
Fwæ_sound.src="FWæ.mp3"
function DisplayCartisamt(){
    DisplayCarti.innerHTML = ("<p>You have " + cartis + " Cartis")
    displayUpgradecost.innerHTML=("<p>Upgrade costs " + multiplierCost + " cartis")

}

function Upgradeclickerclicked(){
    Fwæ_sound.play()
    if (cartis >= multiplierCost){
        cartis = cartis - multiplierCost
        multiplier = multiplier + 1
        multiplierCost = Math.round(multiplierCost * 1.3)
        displayUpgradecost.innerHTML=("<p>Upgrade costs " + multiplierCost + " cartis")
        DisplayCartisamt()
    }
    else{
        alert("not enough cartis")
    }
}

function wipeClicked(){
    localStorage.clear("data")
    location.reload()
}

function saveClicked(){
    data = {
        "Cartis": cartis,
        "multiplier": multiplier,
        "multiplierCost": multiplierCost,
        "upgradecount": upgradecount
    }
    localStorage.setItem("data", JSON.stringify(data))
    console.log("saved:", data)
}

DisplayCartisamt()
//localStorage.clear("data")

