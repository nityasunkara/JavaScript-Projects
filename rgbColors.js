// let colorBox = document.getElementById("div");
// let button = document.getElementById("button");

// colorBox.style.backgroundColor = "lightblue";

// button.addEventListener("click",()=>{
//     let randomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
//     colorBox.style.linear = randomColor;
// })



let colorBox = document.getElementById("div");
let button = document.getElementById("button");

colorBox.style.backgroundColor = "lightblue";

button.addEventListener("click",()=>{
    let gradient = `linear-gradient(to top, rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}), rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}))`;
    colorBox.style.background = gradient;
})