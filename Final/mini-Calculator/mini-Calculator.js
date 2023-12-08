let calculate = document.getElementById("calculate");
calculate.addEventListener('click', compute, false);

function compute() {
    let num1 = document.getElementById("input1").value;
    console.log(num1);
    let num2 = document.getElementById("input2").value;
    console.log(num2);
    let addnum1 = parseInt(num1);
    let addnum2 = parseInt(num2);
    let operator = document.getElementById("dropdown").value;
    console.log(operator);
    if(operator=="+") {
        document.getElementById('result').innerHTML = num1 + " " + operator + ' ' + num2 + " = "  + (addnum1+addnum2);

    } else if(operator=="-") {
        document.getElementById('result').innerHTML = num1 + " " + operator + ' ' + num2 + " = "  + (num1-num2);

    }  else if(operator=="/") {
        document.getElementById('result').innerHTML = num1 + " " + operator + ' ' + num2 + " = "  + (num1/num2);

    } else if(operator=="*") {
        document.getElementById('result').innerHTML = num1 + " " + operator + ' ' + num2 + " = "  + (num1*num2);

    }

}

