//map
// let arr = [12,16,22,14,89];
// let new_arr = arr.map((value)=>{return value*2});
// // function marks(value){
// //     return value*2;
// // }
// console.log(new_arr)

// //filter
// let arr1 = [6,9,12, 35,67];
// let new_arr1 = arr1.filter(numbers);
// function numbers(value){
//     return value>10;
// }
// console.log(new_arr1)

// //function
// function name(){
//     console.log('nitya')
// }
// name()
// name()

// //add two numbers
// let n1 = 8;
// let n2 = 9;
// function add(a,b){
//     console.log(a+b)
// }
// add(n1,n2)

//check if a character is alphabet or not
function check(value){
    if(('a' <= value && value <= 'z') || ('A' <= value && value <= 'Z' )){
        console.log("Alphabet")
    }
    else{
        console.log("Not an Alphabet")
    }
}
check('a')

//count the number of vowels
let name = 'Nitya';
let count = 0;
for(let j=0; j<name.length; j++){
    if(name[j] == 'a' || name[j] == 'e' || name[j] == 'i' || name[j] == 'o' || name[j] == 'u'){
        count = count+1;
    }
}
console.log(`The number of vowels in ${name} is ${count}`);


//remove the vowels from a string
let animal = 'cow';
let arr2 = animal.split('');
let arr = []
for(let j=0; j<arr2.length; j++){
    if(arr2[j] === 'a' || arr2[j] === 'e' || arr2[j] === 'i' || arr2[j] === 'o' || arr2[j] === 'u'){
        delete arr2[j]
    }
}
arr=arr2.join('')
console.log(`The string after removing vowels is ${arr}`)

//reverse a string
let place = 'kakinada';
let arr3 = [];
for(let i=place.length-1; i>=0; i--){
    arr3.push(place[i]);
}
place = arr3.join("")
console.log(`The reversed string is ${place}`)


//check whether a string is a palindrome or not
let place2 = 'madam';
let place3;
let arr4 = [];
for(let i=place2.length-1; i>=0; i--){
    arr4.push(place2[i]);
}
place3 = arr4.join("")
if(place2 === place3){
    console.log(`${place2} is a palindrome`)
}
else{
    console.log(`${place2} is not a palindrome`)
}


