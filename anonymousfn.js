const sum = function(a,b){
    return a+b; 
}
console.log(sum(2,4));


//spread
// const a =[1,2,3,4,5];
// const b = [...a];
// a[0] = 10;
// console.log(a);
// console.log(b);

const c = [8,9,10];
const d = [4,5,6];
const e = [...c,...d];
console.log(e)


//rest
// const my_details = {name:'nitya',age:21,color:'blue',country:'india',masters:'us'};
function add(first,second,...values){
    return values;
}
console.log(add(3,4,22,16,25));