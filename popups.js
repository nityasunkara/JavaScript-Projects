// alert("Hello")

// let torf = confirm("Hi");
// console.log(torf)

// let name = prompt("hi");
// console.log(name)

// let a = 1;
// let b = 0;
// let c = a/b;
// console.log(c);

// function name(){
//     console.log("nitya")
// }

// try{
//     name()
// }
// catch(er){
//     console.log(er.message)
// }
// finally{
//     console.error("I will execute always")
// }

let text = document.getElementsByTagName('p')[0]
console.log(text.innerText)
if(text.innerText == 1){
    throw "message";
}