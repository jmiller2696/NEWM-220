var aText = document.getElementById('answers');

let grades = [78,86,92,77];
aText.innerHTML = "Array: " + grades;
aText.innerHTML += '<br/>Second Value: ' + grades[1];
grades[1] = 83;
aText.innerHTML += "<br/>Array: " + grades;
aText.innerHTML += '<br/>Array Length: ' + grades.length;
let lastGrade = grades.length-1;
let lgValue = ++grades[lastGrade];
aText.innerHTML += '<br/>Array Last grade change: ' + lgValue;
aText.innerHTML += '<br/>Array: ' + grades;
aText.innerHTML += '<br/>Third Array Value: ' + grades[2];
let gradeTotal = grades[0]+grades[1]+grades[2]+grades[3];
aText.innerHTML += "<br/>Array Average: " + (gradeTotal/grades.length);
aText.innerHTML += "<br/>Above Average: " + ((gradeTotal/grades.length)>80);

var exText = document.getElementById('extraAnswers');
let tops = ['tshirts','sweater','sweatshirt','blouse','button-down','hoodie'];

//Adds value to end of array
tops.push('tank');
exText.innerHTML = 'Array push: ' + tops;

//Removes last value of array
tops.pop();
exText.innerHTML += '<br/>Array pop: ' + tops;

//Removes first value of array
tops.shift();
exText.innerHTML += '<br/>Array shift: ' + tops;

//Adds value to beggening
tops.unshift('T-Shirt');
exText.innerHTML += '<br/>Array unshift: ' + tops;

//Add/Delete values in the middle
tops.splice(2,1); // deletes sweatshirt
exText.innerHTML += '<br/>delete sweatshirt: ' + tops;
tops.splice(3,0,'sweatshirt','tank'); //adds sweathsirt and tank
exText.innerHTML += '<br/>Add sweatshirt and tank: ' + tops;

//nested arrays
let bottoms=['jeans','shorts','skirts','slacks','sweatpants'];

let outfits=[tops,bottoms];
document.write(outfits[0][1] + " " + outfits[1][3] );

//OBJECTS

const friend = {
    fName: 'William',
    lName: 'Stevens',
    age: 27,
    student: false,
    fullName: function() {
        return this.fName + " " +this.lName;
    }
}

console.log(friend.fullName()+' is ' + friend.age + ' years old.');

const car = {
    year: 2009,
    make: 'BMW',
    model: '328XI',
    automatic: true,
    mpg: 21,
    effiiciency: function() {
        return (this.mpg > 40);
    }
}
document.getElementById("car").innerHTML+= 'I own a ' + car.year + ' ' + car.make + ' ' + 
car.model + '.';

document.getElementById("carEff").innerHTML+= car.make + ' ' + car.model + ' Efficiency: '
 + car.effiiciency();
 