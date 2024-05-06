// let question = document.getElementsByTagName('h1')[0];

// let answer = document.getElementsByTagName('p')[0];

// answer.style.display = "none";

// question.addEventListener("click", ()=>{
//     console.log(answer.style.display)
//     if(answer.style.display == "block"){
//         console.log('in block')
//         answer.style.display = "none";
//     }
//     else if(answer.style.display == "none"){
//         console.log("in none")
//         answer.style.display = "block";
//     }
    
//     // console.log('nitya')

    
// })





let question = document.getElementById("one");
let answer = document.getElementById("two");

answer.style.display = "none";


question.addEventListener("click",()=>{
    if(answer.style.display == "none"){
        answer.style.display = "block";
    }
    else if(answer.style.display == "block"){
        answer.style.display = "none";
    }

})