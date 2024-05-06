// console.log(1)
// console.log(2)
// setTimeout(()=>{
//     console.log(3)
// },3000)
// console.log(4)
// console.log(5)


// console.log("start")
// let num = [1,2,3,4,5];
// num.forEach((nitya)=>{               //synchronous
//     console.log(nitya)
// })
// console.log("end")


// console.log("start")
// function login(email,password,callback){
//     setTimeout(()=>{
//         console.log("data verified")
//         callback({userEmail:email})
//     },1500)
// }
// function images(email,callback){
//     setTimeout(()=>{
//         let images = ["1.jpg", "2.jpg","3.jpg"]
//         callback(images)
//     },3000)
// }
// login("nityasunkara002@gmail.com","nitya123@",(user)=>{
//     console.log(user)
//     console.log("getting images")
// images(user.userEmail, (images)=>{
//     console.log(images)
// })
// })

// const user = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("data not verified")
//         reject({userEmail:"nitya@gmail.com"})

//     },2000)
// })
// user.then((nitya)=>{
//     console.log(nitya)
// }).catch((er)=>{
//     console.log(er)
// })

console.log("start")
function login(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data verified")
            resolve({ userEmail: email })
        }, 1500)
    })
}
function images(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let images = ["1.jpg", "2.jpg", "3.jpg"]
            resolve(images)
        }, 3000)
    })
}
// login("nitya@gmail.com", "nitya123").then((email) => 
//     images(email)
// ).then((images) => 
//     console.log(images)
// )
async function getDetails(){
    let email = await login("nitya@gmail.com","nitya123")
    let array = await images(email)
    console.log(array)
}
getDetails()


