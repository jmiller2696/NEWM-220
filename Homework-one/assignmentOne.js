let ticketNum = 3; ticketCost = 14;
document.getElementById('ticketNum').innerHTML += ticketNum;
document.getElementById('ticketCost').innerHTML += ticketCost;
document.getElementById('ttCost').innerHTML +=ticketNum * ticketCost;


let jacketPrice = 70; sweaterPrice = 55, shirtPrice =35, pantsPrice = 75, skirtPrice = 49; sandalPrice = 30; shoesPrice = 60;
document.getElementById('bank').innerHTML += 235.87 - (shirtPrice + pantsPrice + shoesPrice);
document.getElementById('addJacket').innerHTML += (bank - jacketPrice)>0 ;

let slicePerPizza =8;
document.getElementById('numStudents').innerHTML += (pizza*slicePerPizza)/(2.5); 
document.getElementById('profPizza').innerHTML += ((pizza*slicePerPizza)%2.5);

let adultPrice = 12; childPrice = 6; drinkPrice = 1.50;
let adultNum = 2; childNum = 1; drinksNum =3;
document.getElementById('Monty').innerHTML += (adultNum*adultPrice)+(childNum*childPrice)+(drinksNum*drinkPrice)

let weeknum = 4;
let week1 = 202.45; week2 = 134.97; week3 = 256.63; week4 = 178.22;
document.getElementById('tips').innerHTML += (week1+week2+week3+week4) / weeknum;