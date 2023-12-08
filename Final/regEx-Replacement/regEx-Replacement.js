let btn = document.getElementById("replace");
btn.addEventListener('click', regEx, false);



function regEx() {
    let one = document.getElementById("1").innerHTML;
    console.log(one);
    let two = document.getElementById("2").innerHTML;
    console.log(two);
    let three = document.getElementById("3").innerHTML;
    console.log(three);
    let four = document.getElementById("4").innerHTML;
    console.log(four);
    
    if(one=/[holly]+i/) {
        document.getElementById('1').innerHTML = 'jollylights.html';
    } else []
    if(two=/[holly+i]/) {
        document.getElementById('2').innerHTML = 'jollyOrnaments.html';
    } else {}
    if(three=/[holly]+i/) {
        document.getElementById('3').innerHTML = 'ChristmasJollyVillage.html';
    } else {}
    if(four=/[holly]+i/) {
        document.getElementById('4').innerHTML = 'jollyJollyWreath.html';
    } else {}
}
