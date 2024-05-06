let input = document.getElementById("inp");
let button = document.getElementById("btn");
let result = document.getElementById("text")
button.addEventListener("click",()=>{
    let number = input.value;
    let value = parseInt(number,2);
    result.innerText = value;
})




