let button = document.getElementById("btn");
let text = document.getElementById("tag");
let image = document.getElementById("img");
button.addEventListener("click",()=>{
    let name = text.value;
    const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + name;
    image.src = URL;


})