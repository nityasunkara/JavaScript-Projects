let button = document.getElementById("btn");
let count = 0;
// console.log(button)
let result = document.getElementById("text");
// console.log(result)
button.addEventListener("click",()=>{
    
    count++;
    // console.log(count)
    result.innerText = `Clicked ${count} times`;
})
// console.log(count)

