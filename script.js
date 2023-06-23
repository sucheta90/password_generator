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
// THEN the password is either displayed in an alert or written to the page X

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

// This fuction checks user input to verifies user input is a number and that the password length falls within the given range 8 through 128 characters;

function isValid(desiredPasswordLength) {
  if (parseInt(desiredPasswordLength)) {
    if (desiredPasswordLength < 8) {
      window.alert("Password should be at least 8 characters long!");
      return false;
    } else if (desiredPasswordLength > 128) {
      window.alert(
        "Sorry! Password can have maximum of 128 characters. Try again!"
      );
      return false;
    } else {
      return true;
    }
  } else {
    window.alert("Please enter a numeric character and try again");
    return false;
  }
}

//Function:  Creates a new array to get random character sets using spread operator
function createArray(hasLowerCase, hasUpperCase, hasSpecialChar, hasNumbers) {
  let newArrayOfChar = []; //
  if (hasLowerCase) {
    newArrayOfChar.push(...lowerCaseAlphabet);
  }
  if (hasUpperCase) {
    newArrayOfChar.push(...upperCaseAlphabet);
  }
  if (hasSpecialChar) {
    newArrayOfChar.push(...specialChar);
    console.log(`New Array inside special`, newArrayOfChar);
  }
  if (hasNumbers) {
    newArrayOfChar.push(...numbers);
    console.log(`New Array inside num`, newArrayOfChar);
  }

  return newArrayOfChar;
}

// This function creates a temporary password and makes sure that at least one character form each char set is present in the password as per user preference.
function createTempPassword(
  hasLowerCase,
  hasUpperCase,
  hasSpecialChar,
  hasNumbers
) {
  let tempPassword = [];
  hasLowerCase
    ? tempPassword.push(
        lowerCaseAlphabet[randomNumber(lowerCaseAlphabet.length)]
      )
    : "";
  hasUpperCase
    ? tempPassword.push(
        upperCaseAlphabet[randomNumber(upperCaseAlphabet.length)]
      )
    : "";
  hasSpecialChar
    ? tempPassword.push(specialChar[randomNumber(specialChar.length)])
    : "";
  hasNumbers ? tempPassword.push(numbers[randomNumber(numbers.length)]) : "";

  return tempPassword;
}

let generatePassword = function () {
  let desiredPasswordLength = window.prompt(
    "Enter the length of your password."
  ); // passwordLen will save the userInput from the prompt;
  let randomArray;
  let tempPassword;
  if (isValid(desiredPasswordLength)) {
    let hasLowerCase = window.confirm(
      "Does the password have lowercase characters ?"
    ); // returns a boolean
    let hasUpperCase = window.confirm(
      "Does the password have uppercase characters ?"
    );
    // returns a boolean
    let hasSpecialChar = window.confirm(
      "Does the password have special characters ?"
    );
    // returns a boolean
    let hasNumbers = window.confirm("Does the password have numbers ?"); // returns a boolean
    // Calling createArray to get an array created with different characters
    randomArray = createArray(
      hasLowerCase,
      hasUpperCase,
      hasSpecialChar,
      hasNumbers
    );
    // console.log(`Big Array`, randomArray);
    // CreateTempArray is called after we get value from the random array.
    randomArray.length > 0
      ? (tempPassword = createTempPassword(
          hasLowerCase,
          hasUpperCase,
          hasSpecialChar,
          hasNumbers
        ))
      : window.alert(
          "Please select at least one alphabet character and/or number and/or special to proceed."
        );

    // The password finally gets generated below this line
    if (tempPassword.length > 0) {
      let remainingChar = desiredPasswordLength - tempPassword.length;
      console.log(`Remainder length`, remainingChar);
      for (let i = 0; i < remainingChar; i++) {
        tempPassword.push(randomArray[randomNumber(randomArray.length)]);
      }
      console.log(`Temp password`, tempPassword);
      return tempPassword.join("");
    }
  } else return "";
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
