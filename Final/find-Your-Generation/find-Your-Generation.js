let find = document.getElementById("find");
find.addEventListener('click', generation, false);

function generation() {
    let year = document.getElementById("input").value;
    console.log(year);
    switch(true){
        case (year>=1946&&year<=1964):
            document.getElementById("result").innerHTML = "You were born in " + year + ". You are a member of the Baby Boomer Generation!";
            break;
        case (year>=1965&&year<=1980):
            document.getElementById("result").innerHTML = "You were born in " + year + ". You are part of Generation X!";
            break;
         case (year>=1981&&year<=1996):
            document.getElementById("result").innerHTML = "You were born in " + year + ". You belong in the Y Generation!";
            break;
        case (year>=1997&&year<=2012):
            document.getElementById("result").innerHTML = "You were born in " + year + ". Generation Z is your generation!";
            break;
        case (year>=2013&&year<=2025):
            document.getElementById("result").innerHTML = "You were born in " + year + ". You are part of Generation Alpha!";
            break;
        default:
            document.getElementById("result").innerHTML = "Sorry - your generation is not listed";
            break;

    }


}