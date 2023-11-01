let PlayerChoie = document.getElementsByClassName("choice");
let rock = '';
let paper ='';
let scissors = '';
      let CompArray = ['rock', 'paper', 'scissors'];
      let innerscore = 0;

      function RPS(numb) {
        console.log(numb);
        let CompDecision = CompArray[Math.floor((Math.random()) * CompArray.length)];
        console.log(CompDecision);
  
        
     
        document.getElementById("resultDecision").innerHTML = "The computer chose:" + CompDecision;
        

        if (numb == 0) {
          if (CompDecision == "paper") {
            innerscore =- 1;
          }
          if (CompDecision == "scissors") {
            innerscore =+ 1;
          }
        }
        

       else if (numb == 1) {
          if (CompDecision == "rock") {
            innerscore += 1;
          }
          if
          (CompDecision == "scissors") {
            innerscore -= 1;
          }
        }

        else {
          if (CompDecision == "rock") {
            innerscore -= 1;
          }
          if (CompDecision == "paper") {
            innerscore += 1;
          
        }
      

        
      }
      document.getElementById("Score").innerHTML = innerscore;
    }