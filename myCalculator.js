let myInput = document.getElementById("inp");
let result = "";
let disableEqual = "+-/%";
let buttons = document.querySelectorAll("button"); //selecting all buttons
let myButtons = Array.from(buttons);               //storing all buttons in an array
myButtons.forEach(button =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML === 'C'){
            result = "";
            myInput.value = result;
        }
        else if(e.target.innerHTML === 'DEL'){
            result = result.substring(0,result.length-1);
            myInput.value = result;
        }
        else if(e.target.innerHTML === "=")
        {
            if(result !== "" )
            {
                if(!result[result.length-1].includes(disableEqual))
                {
                    result = eval(result);
                    myInput.value = result;
                }
            }
        }
        else{
            result = result + e.target.innerHTML;
            myInput.value = result;
        }

    })
})
 