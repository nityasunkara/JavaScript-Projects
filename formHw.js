let element = document.getElementsByTagName("form")[0];
// console.log(element);

element.addEventListener("submit", (e) => {
    e.preventDefault();
    let errorElement = document.getElementById("error");
    let errorArray = [];
    let names = document.getElementById("name").value;
    let phone = document.getElementById("phn").value;
    let mailId = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;
    let cpassword = document.getElementById("cpwd").value;
    // console.log(names,phone,mailId,password,cpassword)
    // console.log(password)
    let alpha = /[a-zA-Z]/;

    if (!names) {
        errorArray.push("Name can't be empty");
    }
    if(!phone){
        errorArray.push("Phone Number can't be empty");
    }
    else if(phone.length !== 10 ){
        errorArray.push("Phone Number should have 10 digits");
    }
    if(!mailId){
        errorArray.push("Email can't be empty");
    }
    else if(mailId.slice(-10) != "@gmail.com"){
        errorArray.push("This email is invalid");
    }
    if(!password){
        errorArray.push("Password is required");
    }
    else if(!/\d/.test(password)){
        errorArray.push("Password must have a digit");
    }
    else if(password.length < 8){
        errorArray.push("Password should contain 8 characters");
    }
    else if(!alpha.test(password)){
        errorArray.push("Password should contain alphabets");
    }
    if(!password.includes("@") && !password.includes("!") && !password.includes("#") && !password.includes("$") && !password.includes("%")  && !password.includes("^") && !password.includes("&") && !password.includes("*") && !password.includes("(") && !password.includes(")")){
        errorArray.push("Password should contain atleast one special character");
    }
    if(!cpassword){
        errorArray.push("Confirm password can't be empty");
    }
    else if(password !== cpassword){
        errorArray.push("Password and Confirm Password do not match");
    }
    
    if(errorArray.length > 0){
        errorElement.innerText = errorArray.join(",\n");
        errorElement.style.color = "red";

    }
    else {
        alert("Form Submitted Successfully!!!   ")
    }
})


