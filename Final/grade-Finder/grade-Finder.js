let gradingScale = ["A", 90, 100, "B", 80, 89, "C", 70, 79, "D", 60, 69, "F", 59, "lower"];

let table = "<tr><th colspan='4'>Grading Scale</th></tr>";
	for(let i=0; i<gradingScale.length; i=i+3) {
  table+="<tr><td>" + gradingScale[i] + "</td><td>" + gradingScale[i+1] + "-" + gradingScale[i+2] + "</td></tr>";
}

let createTable = document.createElement('table');
createTable.innerHTML = table;
let addTable = document.body.appendChild(createTable);


let maxPts = 500;
let inputNum = document.getElementById('inputNum');
console.log(inputNum.value);
let calcGrade = document.getElementById('calcGrade');
let gradeAvg;


function calculate(){
	let percentage= (inputNum.value/maxPts)*100;
	document.getElementById('answer').innerHTML = "Results: Grade Average: " + percentage + "%";
    console.log(percentage);
}


function highlight(){
	gradeAvg = (inputNum.value/maxPts)* 100;
  gradingScale[gradingScale.length-1]=59;
  gradingScale[gradingScale.length-2]=0;
 
let row=1;
	for (let i=0; i<gradingScale.length-1; i=i+3){
		if (gradeAvg>=gradingScale[i+1] && gradeAvg<=gradingScale[i+2]) {
		document.getElementsByTagName("tr")[row].style.backgroundColor="green";
	}
row++;
}
}


function reset(){
	for (let i=1; i<=5; i++) {
		document.getElementsByTagName("tr")[i].style.backgroundColor="white";
	}
}

inputNum.addEventListener('blur', reset, false);

calcGrade.addEventListener('click', function(){ calculate(); highlight();}, false);


