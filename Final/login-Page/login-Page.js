let registerBtn = document.getElementById('submit');
registerBtn.addEventListener('click', register, false);
let loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', loginUser, false);
function register() {
  
  let userName = document.getElementById('user').value;
  let pass = document.getElementById('pass').value;
  let confirmPass = document.getElementById('confirmPass').value;
  let registrationText = document.getElementsByTagName('h2')[0];
  let testExp = /^\w{8,10}$/;
  testExp.test(pass);
  
  if(pass==confirmPass) {
    
    if (testExp.test(pass)){
        registrationText.innerHTML = "Thank you, " + userName + " for registering.";
      let userPass = pass;
      let userInfo= [userName,userPass];
      console.log(userInfo);
      return userInfo;
      
  } else {

    registrationText.innerHTML="Must be 8-10 characters.";

  }

  }else {
    
     registrationText.innerHTML="The passwords must match.";

  }

}

let loginText = document.getElementById('loginText');
function loginUser() {
let userInfo=register();
let loginUsername = document.getElementById('loginUsername').value;
let loginpassword = document.getElementById('loginpassword').value;
  
 
  if(loginUsername==userInfo[0] && loginpassword==userInfo[1]) {
    loginText.innerHTML = "Congratulations! You are logged in.";
    } else {
    loginText.innerHTML = "Your login information does not match those on file. Please try again.";
    }
}