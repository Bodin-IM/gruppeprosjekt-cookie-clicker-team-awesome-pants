data = JSON.parse(localStorage.getItem("data"))

console.log(data)

let carti = document.getElementById("PlayboiCarti")
let DisplayCarti = document.getElementById("DisplayCarti")
let Upgradeclicker = document.getElementById("UpgClicker")
let displayUpgradecost = document.getElementById("displayUpgradecost")

carti.addEventListener("click", cartisClicked)
Upgradeclicker.addEventListener("click", Upgradeclickerclicked)

let cartis = 0
let multiplier = 1
let multiplierCost = 25

function cartisClicked(){
    cartis = cartis + multiplier
    DisplayCartisamt()
}
const Fwæ_sound = new Audio();
Fwæ_sound.src="FWæ.mp3"
function DisplayCartisamt(){
    DisplayCarti.innerHTML = ("<p>You have " + cartis + " Cartis")
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

var data = {
    "Cartis": cartis +100,
    "multiplier": multiplier + 100,
    "multiplierCost": multiplierCost +100,
}


localStorage.setItem("data", JSON.stringify(data))



