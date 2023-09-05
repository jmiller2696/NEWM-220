document.getElementById('ticketNum').innerHTML += 3;
document.getElementById('ticketCost').innerHTML += 14;
document.getElementById('ttCost').innerHTML +=  ticketNum * ticketCost;


let jacketPrice = 70; sweaterPrice = 55, shirtPrice =35, pantsPrice = 75, skirtPrice = 49; sandalPrice = 30; shoesPrice = 60;
document.getElementById('bank').innerHTML += 235.87 - (shirtPrice + pantsPrice + shoesPrice);
document.getElementById('addJacket').innerHTML += (bank - jacketPrice)>0 ;

let pizza = 4; slicePerPizza =8;
document.getElementById('profPizza').innerHTML += ((pizza*slicePerPizza)%2.5);
