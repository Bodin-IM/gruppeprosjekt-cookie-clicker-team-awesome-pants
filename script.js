if (localStorage.getItem("data") === null) {
    data = {
        Cartis: 0,
        multiplier: 1,
        multiplierCost: 25,
        multiplierCost2: 150,
        multiplierCost3: 500,
        multiplierCost4: 1500,
        multiplierCost5: 5000,
        TimeMultiplierCost: 100,
        TimeClicks: 0,
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
let Upgradeclicker2 = document.getElementById("UpgClicker2")
let Upgradeclicker3 = document.getElementById("UpgClicker3")
let Upgradeclicker4 = document.getElementById("UpgClicker4")
let Upgradeclicker5 = document.getElementById("UpgClicker5")
let displayUpgradecost = document.getElementById("displayUpgradecost")
let displayUpgradecost2 = document.getElementById("displayUpgradecost2")
let displayUpgradecost3 = document.getElementById("displayUpgradecost3")
let displayUpgradecost4 = document.getElementById("displayUpgradecost4")
let displayUpgradecost5 = document.getElementById("displayUpgradecost5")
let displayTimeUpgrade = document.getElementById("displayTimeUpgrade")
let Upgradeclickerclick = document.getElementById("TimeClickss")

carti.addEventListener("click", cartisClicked)
Upgradeclicker.addEventListener("click", Upgradeclickerclicked)
Upgradeclicker2.addEventListener("click", Upgradeclicker2clicked)
Upgradeclicker3.addEventListener("click", Upgradeclicker3clicked)
Upgradeclicker4.addEventListener("click", Upgradeclicker4clicked)
Upgradeclicker5.addEventListener("click", Upgradeclicker5clicked)
Upgradeclickerclick.addEventListener("click", TimeUpgrade)
save.addEventListener("click", saveClicked)
wipe.addEventListener("click", wipeClicked)

let cartis = data.Cartis 
let multiplier = data.multiplier
let multiplierCost = data.multiplierCost
let multiplierCost2 = data.multiplierCost2
let multiplierCost3 = data.multiplierCost3
let multiplierCost4 = data.multiplierCost4
let multiplierCost5 = data.multiplierCost5
let TimeMultiplierCost = data.TimeMultiplierCost
let TimeClicks = data.TimeClicks
let upgradecount = data.upgradecount

function cartisClicked(){cartis = cartis + multiplier
    DisplayCartisamt()
}

const Fwæ_sound = new Audio();
Fwæ_sound.src="FWæ.mp3"
function DisplayCartisamt(){
    DisplayCarti.innerHTML = ("<p>You have " + cartis + " Cartis")
    displayUpgradecost.innerHTML=("<p>Upgrade costs " + multiplierCost + " cartis")
    displayUpgradecost2.innerHTML=("<p>Upgrade costs " + multiplierCost2 + " cartis")
    displayUpgradecost3.innerHTML=("<p>Upgrade costs " + multiplierCost3 + " cartis")
    displayUpgradecost4.innerHTML=("<p>Upgrade costs " + multiplierCost4 + " cartis")
    displayUpgradecost5.innerHTML=("<p>Upgrade costs " + multiplierCost5 + " cartis")
    displayTimeUpgrade.innerHTML=("<p>Upgrade costs " + TimeMultiplierCost + " cartis")

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
function Upgradeclicker2clicked(){
    
    if (cartis >= multiplierCost2){
        cartis = cartis - multiplierCost2
        multiplier = multiplier + 2
        multiplierCost2 = Math.round(multiplierCost2 * 1.4)
        displayUpgradecost2.innerHTML=("<p>Upgrade costs " + multiplierCost2 + " cartis")
        DisplayCartisamt()
    }
    else{
        alert("not enough cartis")
    }
}
function Upgradeclicker3clicked(){
    
    if (cartis >= multiplierCost3){
        cartis = cartis - multiplierCost3
        multiplier = multiplier + 3
        multiplierCost3 = Math.round(multiplierCost3 * 1.5)
        displayUpgradecost3.innerHTML=("<p>Upgrade costs " + multiplierCost3 + " cartis")
        DisplayCartisamt()
    }
    else{
        alert("not enough cartis")
    }
}

function Upgradeclicker4clicked(){
    
    if (cartis >= multiplierCost4){
        cartis = cartis - multiplierCost4
        multiplier = multiplier + 4
        multiplierCost4 = Math.round(multiplierCost4 * 1.6)
        displayUpgradecost4.innerHTML=("<p>Upgrade costs " + multiplierCost4 + " cartis")
        DisplayCartisamt()
    }
    else{
        alert("not enough cartis")
    }
}
function Upgradeclicker5clicked(){
    
    if (cartis >= multiplierCost5){
        cartis = cartis - multiplierCost5
        multiplier = multiplier + 5
        multiplierCost5 = Math.round(multiplierCost5 * 1.7)
        displayUpgradecost5.innerHTML=("<p>Upgrade costs " + multiplierCost5 + " cartis")
        DisplayCartisamt()
    }
    else{
        alert("not enough cartis")
    }
}
function TimeUpgrade(){
    if (cartis >= TimeMultiplierCost){
        TimeClicks = TimeClicks + 1
        cartis = cartis - TimeMultiplierCost
        TimeMultiplierCost = Math.round(TimeMultiplierCost * 1.5)
        displayTimeUpgrade.innerHTML=("<p>Upgrade costs " + TimeMultiplierCost + " cartis")
        DisplayCartisamt()
    }
    else{
        alert("not enough cartis")
    }
}
function TimeClicksFunction(){ 
    cartis += TimeClicks
    DisplayCartisamt()
    }


setInterval(TimeClicksFunction, 1000)

function wipeClicked(){
    localStorage.clear("data")
    location.reload()
}

function saveClicked(){
    data = {
        "Cartis": cartis,
        "multiplier": multiplier,
        "multiplierCost": multiplierCost,
        "multiplierCost2": multiplierCost2,
        "multiplierCost3": multiplierCost3,
        "multiplierCost4": multiplierCost4,
        "multiplierCost5": multiplierCost5,
        "upgradecount": upgradecount
    }
    localStorage.setItem("data", JSON.stringify(data))
    console.log("saved:", data)
    alert("Saved")
}

DisplayCartisamt()
//localStorage.clear("data")

