let b1 = document.getElementById("btn1");
let b2 = document.getElementById("btn2");
let b3 = document.getElementById("btn3");
let shape = document.getElementById("one");
// b1.addEventListener("click",()=>{
//     shape.style.border = "2px solid black";
//     shape.style.height = "50px";
//     shape.style.width = "50px";
//     shape.style.borderRadius = "50%"
// })
// b2.addEventListener("click",()=>{
//     shape.style.border = "2px solid black";
//     shape.style.height = "50px";
//     shape.style.width = "50px";
//     shape.style.borderRadius = "0px";
// })
// b3.addEventListener("click",()=>{
//     shape.style.border = "2px solid black";
//     shape.style.height = "50px";
//     shape.style.width = "80px";
//     shape.style.borderRadius = "0px";
// })


function shape1(myShape) {
    shape.style.border = "2px solid black";
    shape.style.height = "50px";
    shape.style.width = "50px";
    shape.style.borderRadius = "0px"
    if (myShape === "circle") {
        
        
        shape.style.borderRadius = "50%"
    }
    else if (myShape === "square") {
        
        
        
    }
    else {
        
        shape.style.width = "80px";
        

    }
}