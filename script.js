let carti = document.getElementById("PlayboiCarti")
let DisplayCarti = document.getElementById("DisplayCarti")

carti.addEventListener("click", cartisClicked)

let cartis = 0
let multiplier = 1

function cartisClicked(){
    cartis - cartis + multiplier
    DisplayCartisamt()
}

function DisplayCartisamt(){
    DisplayCarti.innerHTML = ("<p>You have " + cartis + " Cartis")
}