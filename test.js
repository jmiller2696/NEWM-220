var fName = "Greg"; //string
var book = "Greg's dog";
var lName = "Brooks";
var myAge = 27; //number
var student = true; //boolean
var student = false;

let hometown="Indianapolis"; //similar to var
hometown="Chicago"; //how to change a let variable
const DIMEVAL=10; //value that cannot be changed
let fullName=fName + " " + lName;

console.log(hometown); //shows in console
document.write("I love my dog."); //print directly to document
document.getElementById("fullName").innerHTML += fullName + " is <i>" + myAge +"</i> years old!";
console.log("Student:"+typeof student); //checks type of variable
console.log("DIMEVAL"+typeof DIMEVAL);

//Lunch problem
let banana = 1.50;
let sandwich = 4.50;
let chips = 1.75;
let drink = 2.00;
let lunch = banana + sandwich + drink + chips*2;
console.log("Lunch:"+lunch);
const TAXRATE = 0.07;
let lunchTotal=lunch + (lunch*TAXRATE);
let cash = 12.50;
document.write("<p>Do you have enough cash for lunch?:"  + (cash>lunchTotal) + "</p>");