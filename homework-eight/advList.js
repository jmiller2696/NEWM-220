var myItems = document.querySelectorAll('#codeBox li');
var totalItems = myItems.length;
console.log(totalItems);
for(let i=0; i<totalItems; i++) {
    let listItems = document.createElement('img');
    listItems.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png');
    listItems.setAttribute('class', "listIcon");
    myItems[i].appendChild(listItems);
    

}


function changeProp(e) {
    let target = getTarget(e);
    let tParent= target.parentnode;
}
myItems.addEventlistener("click", Function (changeProp), false);
