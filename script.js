// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// generatePassword is called from within writePassword. Defined a function named generatePassword x;

// THEN I am presented with a series of prompts for password criteria
// window.prompt , will get the user input of the length of the password. X

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password X

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// Check for a condition - userInput >= 8 and unserInput<=128; X

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters X

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// defining character set for upperCase alpahbet
const upperCaseAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// defining character set for lowerCase alpahbet, using array.map to create an array of lowerCase alpabets.
let lowerCaseAlphabet = upperCaseAlphabet.map((e) => e.toLowerCase());

//Number Array
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Special Character's array
let specialChar = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// console.log(specialChar.length);

// This fucnction gives random number between 0 and given range
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function createArray() {
  if (hasLowerCase && hasUpperCase && hasSpecialChar && hasNumbers) {
    return (newArrayOfChar = [
      ...lowerCaseAlphabet,
      ...upperCaseAlphabet,
      ...specialChar,
      ...numbers,
    ]);
  } else if (hasLowerCase && hasUpperCase && hasNumbers) {
    return (newArrayOfChar = [
      ...lowerCaseAlphabet,
      ...upperCaseAlphabet,
      ...numbers,
    ]);
  } else if (hasLowerCase && hasUpperCase && hasSpecialChar) {
    return (newArrayOfChar = [
      ...lowerCaseAlphabet,
      ...upperCaseAlphabet,
      ...specialChar,
    ]);
  } else if (hasLowerCase && hasUpperCase) {
    return (newArrayOfChar = [...lowerCaseAlphabet, ...upperCaseAlphabet]);
  }
}

let generatePassword = function () {
  let finalPassword = []; //empty array;
  let passwordLen = window.prompt("Enter the length of your password."); // passwordLen will save the userInput from the prompt;
  let hasLowerCase;
  let hasUpperCase;
  let hasSpecialChar;
  let hasNumbers;
  if (passwordLen < 8) {
    window.alert("Password should be atleast 8 characters long!");
    return "";
  } else if (passwordLen > 128) {
    window.alert("Sorry! Password can have maximum of 128 characters.");
    return "";
  } else {
    hasLowerCase = window.confirm(
      "Does the password have lowercase characters ?"
    ); // returns a boolean
    console.log(`haslowercase`, hasLowerCase);
    hasUpperCase = window.confirm(
      "Does the password have uppercase characters ?"
    );
    console.log(`hasuppercase`, hasLowerCase); // returns a boolean
    hasSpecialChar = window.confirm(
      "Does the password have special characters ?"
    );
    console.log(`special`, hasSpecialChar); // returns a boolean

    hasNumbers = window.confirm("Does the password have numbers ?"); // returns a boolean
    console.log(`numbers?`, hasNumbers);

    if (hasLowerCase && hasUpperCase && hasSpecialChar && hasNumbers) {
      let newArrayOfChar = [
        ...lowerCaseAlphabet,
        ...upperCaseAlphabet,
        ...specialChar,
        ...numbers,
      ];
      console.log(newArrayOfChar);
      for (let i = 0; i < passwordLen; i++) {
        let randIndex = randomNumber(newArrayOfChar.length);
        console.log(randIndex);
        finalPassword.push(newArrayOfChar[randIndex]);
      }
      console.log(finalPassword);
      return finalPassword.join("");
    }
  }
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
