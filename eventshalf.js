let myList = document.getElementById('myList');
function addItem() {
    let newItem = prompt("Enter item:");
    let newLi = document.createElement('li');
    let newText = document.createTextNode(newItem);
    newLi.appendChild(newText);
    myList.appendChild(newLi);
}
document.getElementsByTagName('button').addEventListener('click', addItem);

//delete any list item
function getTarget(e) {
    //get the target element of an event
    if(!e) {
        e = window.event;
    }

    return e.target || e.srcElement;
}

function deleteItem(e) {
    let target = getTarget(e);
    console.log(target);
    let tParent = target.parentNode;
    console.log(tParent);
    tParent.removeChild(target);
}

myList.addEventListener('click', deleteItem);

