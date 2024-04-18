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

function DisplayCartisamt(){
    DisplayCarti.innerHTML = ("<p>You have " + cartis + " Cartis")
}

function Upgradeclickerclicked(){
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