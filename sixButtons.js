let b1 = document.getElementById("btn1");
let b2 = document.getElementById("btn2");
let b3 = document.getElementById("btn3");
let b4 = document.getElementById("btn4");
let b5 = document.getElementById("btn5");
let b6 = document.getElementById("btn6");
let myBody = document.getElementsByTagName("body")[0];
b1.addEventListener("click",()=>{
    myBody.style.backgroundColor = "blue";
})
b2.addEventListener("click",()=>{
    myBody.style.backgroundColor = "green";
})
b3.addEventListener("click",()=>{
    myBody.style.backgroundColor = "purple";
})
b4.addEventListener("click",()=>{
    myBody.style.backgroundColor = "orange";
})
b5.addEventListener("click",()=>{
    myBody.style.backgroundColor = "pink";
})
b6.addEventListener("click",()=>{
    myBody.style.backgroundColor = "brown";
})