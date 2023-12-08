let emailText = document.getElementById('email');

let registerBtn = document.getElementById('submit');
registerBtn.addEventListener('click', register, false);

let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset, false);


function register() {
    console.log(emailText.value);
   
        let emailTest = /[@]+[.\w{2,3}]/;
        console.log('email: '+ emailTest.test(email.value));
        emailCheck = emailTest.test(email.value);

        if(!emailCheck) {

            document.getElementById("emailAns").innerText = "Must a valid email address";

        } else {
            document.getElementById("emailAns").innerText =  '';
        }
       
        let passTest = /^\w{8,10}$/;
        console.log('password:'+ passTest.test(password.value));
        let passCheck =passTest.test(password.value);

        if(!passCheck) {

            document.getElementById("passwordAns").innerText = "Must between 8 and 10 characters";

        } else {
            document.getElementById("passwordAns").innerText = '';
        }

        let vPassCheck = password.value == verifyPassword.value;
        console.log('verify pass: ' +vPassCheck);

        if(!vPassCheck) {

            document.getElementById("vPasswordAns").innerText = "Passwords must match";

        } else {
            document.getElementById("vPasswordAns").innerText = '';
        }

        let stateTest = /^(A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]a[lkszraep]|c[aot]|d[ec]|f[lm]|g[au]|hi|i[adln]|k[sy]|la|m[adehinopst]|n[cdehjmvy]|o[hkr]|p[arw]|ri|s[cd]|t[nx]|ut|v[ait]|w[aivy])$/;
        console.log('state:' + stateTest.test(state.value));
        let stateCheck = stateTest.test(state.value);

        if(!stateCheck) {

            document.getElementById("stateAns").innerText = "Use the 2 digit postal code";

        } else {
            document.getElementById("stateAns").innerText = '';
        }

        let zipTest = /^\d{5}$|^\d{9}$/;
        console.log('zip: ' + zipTest.test(zCode.value));
        let zipCheck = zipTest.test(zCode.value);

        if(!zipCheck) {

            document.getElementById("zipAns").innerText = "Use the 5 or 9 digit zip code";

        } else {
            document.getElementById("zipAns").innerText = '';
        }

        let phoneTest = /^\d{3}[-]\d{3}[-]\d{4}$/;
        console.log('phone: ' + phoneTest.test(pNum.value));
        let phoneCheck = phoneTest.test(pNum.value);

        if(!phoneCheck) {

            document.getElementById("phoneAns").innerText = "Use the following format: xxx-xxx-xxxx";

        } else {
            document.getElementById("phoneAns").innerText ='';
        }

        let ccardTest = /^(\d{4})([-])(\d{4})([-])(\d{4})([-])(\d{4})$/;
        console.log('ccard: '+ ccardTest.test(cNum.value));
        let ccardCheck = ccardTest.test(cNum.value);

        if(!ccardCheck) {

            document.getElementById("ccardAns").innerText = "Use the following format: xxxx-xxxx-xxxx-xxxx";

        } else {
            document.getElementById("ccardAns").innerText ='';
        }

        let expTest = /^(\d{2})([/])(\d{2})([/])(\d{4})$/;
        console.log('expiration: ' + expTest.test(expDate.value));
        let expCheck = expTest.test(expDate.value);

        if(!expCheck) {

            document.getElementById("expAns").innerText = "Use the following format MM/DD/YYYY";

        } else {
            document.getElementById("expAns").innerText = '';
        }

        if (emailCheck && passCheck && vPassCheck && stateCheck && zipCheck && phoneCheck && ccardCheck && expCheck) {
            document.getElementById("regCheck").innerText = "Registration Successful";
        } else {
            document.getElementById("regCheck").innerText = "Please use the correct format and try again";
        }
    }


function reset() {
    console.log('reset');
    let elements = document.getElementsByTagName('input');
    console.log(elements.length);

    for(i=0; i<(elements.length-2); i++) {
        elements[i].value ="";
    }
}