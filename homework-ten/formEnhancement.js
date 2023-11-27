var passForm = document.forms[0];
var passBtn = passForm.getElementsByTagName('img')[0];
passBtn.addEventListener('click', showPassword);




function showPassword() {
    var imgSrc = passBtn.getAttribute('src');
    console.log(imgSrc);
    var hidePassImg = imgSrc.indexOf('hide');
    console.log(hidePassImg);
    hidePassImg=hidePassImg<0;
    console.log(hidePassImg);

    if(!hidePassImg){
        passBtn.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/showPassIcon.png");
        document.getElementById('pass').setAttribute('type', 'text');
        console.log(hidePassImg);

    } else{
        passBtn.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/hidePassIcon.png");
        document.getElementById('pass').setAttribute('type', 'password');
        console.log(hidePassImg);
    }
}


