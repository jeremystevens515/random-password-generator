console.log("hello, world");

// Assignment Code
// var generateBtn = document.querySelector("#generate");

// My Variables
var numofCharacters = requestCharacters();
var numofOptions = 0; //could replace this variable with arrayPosition.length
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '<', '>', '?', '/', ';', ':', '[', ']'];
var arrayAssignments = [lowerCase, upperCase, numbers, specialCharacters];
var arrayNames = ['lowercase', 'uppercase', 'numbers', 'special characters'];
var arrayPosition = [];


// Request and confirm the number of characters the user wishes to use for their password
// if the number entered is not between 8 and 128, the user is notified
// if the number is between 8 and 128, the user is prompted to confirm their choice
// if the user selects 'cancel' when they are asked to confirm their choice, they are asked again for their input
// if the user confirms their choice, the input will be returned and set as the value of numofCharacters
// This function is being called in var numofCharacters
// TODO: check if n is a number
function requestCharacters() {
  var n = window.prompt("How many characters would you like your password to be?");
  if (n < 8 || n > 128 === true) {
    window.prompt("Password must be between 8 and 128 characters.");
  } else {
    var confirmation = window.confirm("You requested your password be " + n + " characters. Is this correct?");
    if (confirmation === false) {
      requestCharacters();
    } else {
      return n;
    }
    }
  }

// Ask the user if they would like to use lowercase, uppercase, numbers, and/or special characters in their password
// var ans is updated with a boolean on each iteration based on the user's input
// if the user's answer returns true, i is push to an empty array and corresponds to a position in arrayAssignments
// additionally, the total number of criteria selected by the user is tracked and will be used for iteration
for (var i = 0; i < arrayNames.length; i++) {
  var ans = window.confirm("Would you like to use " + arrayNames[i] + " in your password?");
  if (ans === true) {
    arrayPosition.push(i);
    numofOptions = numofOptions + 1
  } else {
    continue;
  }
}

console.log('array position: ' + arrayPosition);
console.log('number of options ok: ' + numofOptions);

// // Define generatePassword function
// function generatePassword() {
//   console.log("you clicked the button")
//   return "generated"
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
