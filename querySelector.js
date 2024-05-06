let element1 = document.getElementById("one")
let element2 = document.getElementsByClassName('two');
let element3 = document.getElementsByTagName('h1')
console.log(element1.style);
element1.style.color = 'blue'
element1.style.backgroundColor = 'green'

element3[2].classList = 'nitya country';
element3[2].id = 'name'
console.log(element3[2])
// console.log(element2);
// console.log(element3);
let element4 = document.querySelectorAll("h1")
// console.log(element4)