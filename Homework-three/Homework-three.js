
function f1(p,i,t) {
    var p = parseFloat(document.getElementById('principal').value);
    var i = parseFloat(document.getElementById('interestRate').value);
    var i2 = i/100;
    var t = parseFloat(document.getElementById('time').value);
    var total= p*(1+i2*t);
    var totalInterest = p*(i2*t);
    document.getElementById('yourResults').innerHTML= "With a beggining principal of $"
    + p + " and with a growth rate of " +i+ "% for " + t + " years, your total interest will be $"
    + totalInterest + " with a grand total of $" + total.toFixed(2);
}

