// let name = 'Nitya';
// let age = 21;

// let name1 = 'Suma';
// let age1 = 48;


// let name_arr = ['Nitya', 'Suma'];
// let age_arr = [21, 48];
// console.log(age_arr)
// console.log(name_arr)

let student_details1 = {
    name: 'Nitya',
    age: 21,
    city: 'Kakinada'
};
console.log(student_details1)

let student_details2 = {
    name: 'Sudha',
    age: 42,
    city: '  Kakinada'
};
console.log(student_details2)

let student_details = [
    {
        name: 'Nitya',
        age: 21,
        city: 'Kakinada'
    },
    {
        name: 'Sudha',
        age: 42,
        city:{city1:'kakinada'}
    }
]
console.log(student_details)
console.log(student_details[1].age)       //print age of first object
console.log(student_details[1]['age'])
console.log(student_details[1].city)
console.log(student_details[1].city.city1)



// let obj = new Object()
// obj.name = 'Nitya';
// obj.age = 21;
// obj.city = 'Kakinada';
// console.log(obj)

//delete
// delete obj.city
// console.log(obj)

//add
// obj['first_name'] = 'Lakshmi'
// console.log(obj)
// console.log(obj['age'])


//to print all keys of an object
// console.log(Object.keys(obj))

