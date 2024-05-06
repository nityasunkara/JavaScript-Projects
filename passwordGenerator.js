let myPassword = document.getElementById("password");
let copyButton = document.getElementById("copyButton");
let GeneratePassword = document.getElementById("final");




let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function generateUppercase() {
    return upper[Math.floor(Math.random() * upper.length)];
}

let lower = "abcdefghijklmnopqrstuvwxyz"
function generateLowercase() {
    return lower[Math.floor(Math.random() * lower.length)];
}

function generateNumbers() {
    return Math.floor(Math.random() * 10);
}

let scharacters = "!@#$%^&*()_-+=[]{}|;:',.<>?/"
function generateSpecialCharacters() {
    return scharacters[Math.floor(Math.random() * scharacters.length)];
}




GeneratePassword.onclick =() => {
    let plength = document.getElementById("plen").value;

    let Upper = document.getElementById("upper").checked;

    let Lower = document.getElementById("lower").checked;

    let Number = document.getElementById("number").checked;

    let SpecialCharacter = document.getElementById("special").checked;
    let arr = [];
    for (i = 0; i < plength; i++) {
        if (Upper) {
            arr.push(generateUppercase());
        }
        if (Lower) {
            arr.push(generateLowercase());
        }
        if (Number) {
            arr.push(generateNumbers());
        }
        if (SpecialCharacter) {
            arr.push(generateSpecialCharacters());
        }
    }

    let generatePassword = arr.join("").substring(0,plength)
    myPassword.value = generatePassword;
    console.log(myPassword.value)
}



copyButton.onclick = () => {
    navigator.clipboard.writeText(myPassword.value);
};
