let tool;
function alertAControl() {
    alert('Good job');
}
function goHome(){
    allert('you go home');
}
function enterRoom() {
    alert('You entered the room and it is really dark and the growl is getting louder.');
    if(tool.toUpperCase()=="SHOVEL") {
        alert('Luckily you chose the shovel. You were able to defeat the beast by knocking him out with your ' + tool);
    } else if (tool.toUpperCase()=="LADDER") {
        alert("You tried to climb your " + tool + " but the beast devoured you.");
    } else if (tool.toUpperCase()=="FLASHLIGHT") {
        alert("You were able to blind the beast with your " + tool + " And escape");
        let alertAC = prompt("Do you tell authorities about the beast? ALERT or HOME");
        if(alertAC.toUpperCase()=="ALERT") {
            alertAControl();
        } else {
            goHome();
        }
    }
}

function leaveRoom(){
alert('You chose to leave coward.')    
}

function startGame() {
    let player = prompt("Welcome to my choose your adventure game Please start by entering your name: ");
    alert("Wecome, " + player + " ! Today we are going on a campus adventure. Are you ready? Click OK to begin");
    tool = prompt("To beigin your adventure, you need to select a tool. Please select between: ladder, flashlght, or shovel");
    let room = prompt("You are walking through the campus center and hear a menacing growl coming from another room. Do you enter or leave");
    if(room.toUpperCase()=="ENTER"){
        enterRoom();
    } else {
        leaveRoom();
    }
}

//Cannot define functions inside of other functions. must be defined before called.
