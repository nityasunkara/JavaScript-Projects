let input = document.getElementById("inp");
let result = document.getElementById("text");

input.addEventListener("input",(e)=>{
    
    
    result.innerText = e.target.value;
})