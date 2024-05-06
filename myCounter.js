let result = document.getElementsByTagName('h2')[0];
let value = Number(result.innerText);
let increment = document.getElementById('inc');
let reset = document.getElementById('res');
let decrement = document.getElementById('dec');
increment.addEventListener("click",()=>{
    value++;
    result.innerText = value;
})
reset.addEventListener("click",()=>{
    value = 0;
    result.innerText=value;
})
decrement.addEventListener("click",()=>{
    if(value == 0){
        value = 0;
        result.innerText=value;
    }
    if(value > 0){
        value--;
        result.innerText = value;
    }
})

