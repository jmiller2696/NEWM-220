document.getElementById('title').innerText = "DOM Manipulation";
document.getElementById('container').style.backgroundColor = "lightblue";
document.querySelector('ul').innerText += "Item 7";
let list = document.getElementsByTagName('li');
 for (let i=0; i<list.length; i++) {
    list[0].style.color="crimson";
 }
console.log(list);