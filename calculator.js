let element1 = Number(document.getElementById('one').innerText)
let element2 = Number(document.getElementById('two').innerText)
console.log(element1)
console.log(element2)
let element3 = document.getElementById('operation').innerText
console.log(element3)
let element4 = document.getElementById('result')
console.log(element4)

const result =(a,b,opr)=>{
    if(opr === 'Addition'){
        return a+b
    }
    else if(opr === 'Subtraction'){
        return a-b
    }
    else if(opr === 'Multiplication'){
        return a*b
    }
    else if(opr === 'Division'){
        return a/b
    }

}
let Result = (result(element1, element2, element3))
console.log(Result)

element4.innerHTML = `<h1>Result of ${element1} and ${element2} is: ${Result}</h1> `

