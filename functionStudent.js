function changeTxt () {
    document.getElementById('changeTxt').innerHTML = "This text has been changed.";
 }

changeTxt();

function btmTxt() {
    document.write("This function does not take parameters.")
}
btmTxt();

var greeting = function() { //anonymous function
console.log("Hello, World");
}

greeting();

let band = "Gojira";
function faveBand(b){
    document.getElementById('favBand').innerHTML += "My favorite band is " + b;
}

faveBand(band); //b is equal to band now


function firstName(n) {
    console.log("My name is " + n);
}

firstName("Joseph");

let rHeight = 12; 
let rWidth = 23;

function recPerm(h, w) {
    let perimeter = 2*h+2*w;
    return perimeter;
}
document.getElementById('panswer').innerHTML += recPerm(rHeight, rWidth) + " feet.";

console.log(recPerm(rHeight, rWidth));


function calcArea(){
    let h = document.getElementById("height").value;
    let w = document.getElementById('width').value;
    let area = h*w;
    document.getElementById('answer').innerHTML = area + " square feet.";
}

function test(){         //function ends when it comes too a return
    return true;
    return false;
}

function recTotal(h,w){
    let perm = recPerm(h,w);
    let area = h*w;
    let recValues = [perm, area];
    return recValues;
}

document.getElementById('multiAnswer').innerHTML = "<ul><li>Perimeter: "+
recTotal(rHeight, rWidth)[0] + "</li></ul>"+ "Area:" +
recTotal(rHeight, rWidth)[1] + "</li></ul>";

function myFunction(){
    alert("Who goes there?")
    //window.alert
}

function wizard(name,job){
    document.getElementById('future').innerHTML =  "welcome" + name + "the" + job +"!";
}


function addItem(){
let item = prompt("Add Items:");
console.log(item);
alert("You added " + item + "to your list.");
}


