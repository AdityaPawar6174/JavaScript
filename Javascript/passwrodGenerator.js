// PASSWORD GENERATOR PROGRAM

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCase : "";
    allowedChars += includeUpperCase ? upperCase : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(password length must be atleast 1)`;
    }
    if(allowedChars.length === 0){
        return `(Atleast 1 set of character needs to be selected)`;
    }

    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const passwordLength = 10;
const includeLowerCase =  true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword (passwordLength,
                                   includeLowerCase,
                                   includeUpperCase,
                                   includeNumbers,
                                   includeSymbols
                                );

console.log(password);