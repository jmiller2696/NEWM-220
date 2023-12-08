let calculate = document.getElementById("calculate");
calculate.addEventListener('click', compute, false);

function compute() {
    let price =document.getElementById("price").value;
    console.log(price);
    let discountCode = document.getElementById("discount").value;
    console.log(discountCode);
    let tax = 1.08;
    
    if (discountCode=='SAVE20') {
        let discountPrice = (price*.80);
        let moneySaved=(price*.20);
        console.log(discountPrice);
        finalPrice=(discountPrice*tax);
        console.log(finalPrice);
        document.getElementById("result").innerHTML = "Your total: "+finalPrice+ "<br/>You saved: "+moneySaved+"!";
    } else if(discountCode=='JOLLYDAYS') {
        let discountPrice = (price*.85);
        let moneySaved=(price*.15);
        console.log(discountPrice);
        finalPrice=(discountPrice*tax);
        console.log(finalPrice);
        document.getElementById("result").innerHTML = "Your total: "+finalPrice+ "<br/>You saved: "+moneySaved+"!";
    } else if(discountCode=='HOLIDAY10') {
        let discountPrice = (price*.90);
        let moneySaved=(price*.10);
        console.log(discountPrice);
        finalPrice=(discountPrice*tax);
        console.log(finalPrice);
        document.getElementById("result").innerHTML = "Your total: "+finalPrice+ "<br/>You saved: "+moneySaved+"!"; 
    } else {
        document.getElementById("result").innerHTML = "Invalid Discount Code."; 

    }

    }