//for loop syntax
//for(initialization; condition; inc/dec)




// for(let i=0; i<=5; i++){
//     console.log('Nitya')
// }

// //print days in an array
// let arr = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// //sum of first n natural numbers
// let n=9;
// let sum=0;
// for(let i=1; i<=n; i++){
//     sum=sum+i;
// }
// console.log(sum)

// //sum of numbers in a given range
// let n1=-10;
// let n2=-5;
// let add=0;
// for(let i=n1; i<=n2; i++){
//     add=add+i;
// }
// console.log(add)



// // Largest element in an array
// let arr1 = [34,57,90,56,11];
// let max=0;
// for(let i=0; i<arr1.length; i++) {
//     if (max > arr1[i]){
//         max = max;
//     } 
//     else{
//         max = arr1[i];
//     }
// }
// console.log(max);



// //factors of a number
// let num=8;
// for(let i=1; i<=num; i++){
//     if(num%i == 0){
//         console.log(i);
//     }
// }


// //smallest element in an array
// let arr2 = [12,34,50,98,76,15];
// let min=arr2[0];
// for(let i=1; i<arr2.length;i++){
//     if(arr2[i]<min){
//         min=arr2[i];
//     }
// }
// console.log(`The smallest element is ${min}`)


// //reverse an array
// let arr3=[12,56,98,90,34];
// let arr4=[]
// for(let i=arr3.length-1;i>=0;i--){
//     arr4.push(arr3[i]);
// }
// console.log(arr4)


// //smallest and largest elements in an array
// let arr5=[12,56,89,90,34];
// let mini=arr5[0];
// let maxi=0;
// for(let i=0; i<=arr5.length; i++){
//     if(maxi<arr5[i]){
//         maxi=arr5[i]
//     }
// }
// console.log(`The largest element is ${maxi}`);
// for(let j=1; j<=arr5.length; j++){
//     if(arr5[j]<mini){
//         mini=arr5[j];
//     }
// }
// console.log(`The smallest element is ${mini}`);


// //second smallest element in an array
// let arr6=[12,14,89,90,5,8,7,9];
// for(let i=0; i<arr6.length; i++){
//     if()
// }



//check whether a character is vowel or consonant
// let char = 'n';
// if(char === 'a'|| char === 'e'|| char === 'i' || char === 'o' || char === 'u'){
//     console.log(`${char} is a vowel`);
// }
// else{
//     console.log(`${char} is a consonant`);
// }

// //length of the string without using strlen()
// let name = 'Suma';
// let length = 0;
// for(let i of name){
//     length++;
// }
// console.log(`Length of the string is ${length}`)


// let input='a';
// let vowels = "aeiou";
// if(vowels.includes(input)){
// console.log("yes")}



//sdfg8jh93nbvx6j5as8m4
let sequence = 'sdfg8jh93nbvx6j5as8m4';
for(let i of sequence){
    if(('a' <= i && i <= 'z') ||  ('A' <= i && i <= 'Z')){
        console.log(`${i} is an alphabet`)
    }
    else{
        console.log(`${i} is a number`)
    }
}


//count the frequency of characters in a string
let name = 'sumasunkara';
let frequency = {};
for(let i of name){
    if(i in frequency){
        frequency[i]++;
    }
    else{
        frequency[i] = 1;
    }
}
console.log(frequency);
