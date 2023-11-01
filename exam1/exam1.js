var cWinnings = 50;
var wText;
var rNum;
document.getElementById('cWinnings').innerHTML =+ 'Current Winnings: ' + cWinnings;
var newWinnings;

function chanceRoll() {
    var rNum = Math.floor(Math.random()*6)+1;
    document.getElementById("wText").innerHTML = "You Rolled a " + rNum + "! "
    var newWinnings
    if(rNum==1) {
        document.getElementById('wText').innerHTML += 'It is good to be number 1! You doubled your winnings!'
        var newWinnings =+ cWinnings*2;
        document.getElementById('newWinnings'). innerHTML = 'New Winnings: ' + newWinnings;
    }
    
    else if (rNum==2){
        document.getElementById('wText').innerHTML += 'Second best is not good enough. You lose 20 points';
        var newWinnings =+ newWinnings-20;
         document.getElementById('newWinnings'). innerHTML = 'New Winnings: ' + newWinnings;

    }

    else if (rNum==3) {
        document.getElementById('wText').innerHTML += 'Three is not a lucky number at all. You lose all your winnings!';
        var newWinnings =+ 0;
        document.getElementById('newWinnings'). innerHTML = 'New Winnings: ' + newWinnings;

    }

    else if (rNum==4) {
        document.getElementById('wText').innerHTML += 'Four is lucky like a four-leafed clover. You won 400 points!';
        var newWinnings =+ cWinnings + 400;
        document.getElementById('newWinnings'). innerHTML = 'New Winnings: ' + newWinnings;

    }

    else if (rNum==5) {
        document.getElementById('wText').innerHTML += 'Five Alive! You are still in the game, but there is no change in your winnings.';
    var newWinnings=+ newWinnings
        document.getElementById('newWinnings'). innerHTML = 'New Winnings: ' + newWinnings;
    }

    else if(rNum==6) {
        let gNum=prompt('Pick a number between 1 and 50: ');
        let tNum = 32;
        if(gNum==tNum) {
            document.getElementById('wText').innerHTML += 'You are lucky indeed! You just multiplied your winnings by your chosen number!';
            var newWinnings = cWinnings *32;
        }
       


            

        
    
    
    }

}

        
    


