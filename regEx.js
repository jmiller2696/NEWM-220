let stringText = document.getElementById('string');
let zipText = document.getElementById('zip');
let ccText = document.getElementById('ccard');
let phoneText = document.getElementById('phone');

//Regular Expressions: / / 

//String
function validateString() {
    let vs1 = /ralph/i;
    //i is case insensitive
    let vs2 = /^(cat)/; //must begin with cat
    let vs3 = /dog$/; // must end with dog

    document.getElementById('stringAns').innerText = vs3.test(stringText.value)
}

stringText.addEventListener('blur', validateString); 

function validateZip() {
    let vz1 = /^[0-9]{5}$/; // must have a number between 1 and 5 occur 5 times
    let vz2 = /^\d{5}$/; //same as the above , d = any digit(number)
    let vz3 = /^([0-9]{5})([0-9]{4}?)$/; // must begin with 5 digits or end with 4 digits so a 5 digit number or a nine digit number will work

    document.getElementById('zipAns').innerText = vz3.test(zipText.value)
}

zipText.addEventListener('blur', validateZip); 

//credit card
function validateCC() {
    let vc1 = /^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})$/; //([- ]?) will account for the dashes or spaces in the credit card number

    document.getElementById('ccAns').innerText = vc1.test(ccText.value)

}

ccText.addEventListener('blur', validateCC);


//Months 01-12
let monthRegEx = /0[1-9]|1[0-2]/;

//Date 1-31
let dateRegEx = /[1-9]|[12][0-9]|3[01]/;

//Year 20th and 21st century

let yearRegEx = /(19|20)\d{2}/;

// [a-zA-Z] is the same as \w