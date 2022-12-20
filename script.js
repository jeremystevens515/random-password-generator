console.log("hello, world");

// Assignment Code
// var generateBtn = document.querySelector("#generate");

// My Variables
var numofCharacters = requestCharacters();
var numofOptions = 0;
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '<', '>', '?', '/', ';', ':', '[', ']'];
var arrayAssignments = [lowerCase, upperCase, numbers, specialCharacters];


// Request the number of characters the user wishes to use for their password
function requestCharacters() {
  var n = window.prompt("How many characters would you like your password to be?");
  if (n < 8 || n > 128 === true) {
    window.prompt("Password must be between 8 and 128 characters.");
  } else {
    var confirmation = window.confirm("You requested your pass word be " + n + " characters. Is this correct?");
    if (confirmation === false) {
      requestCharacters();
    } else {
      return;
    }
    return;
    }
   return;
  }
// Confirm the number of characters the user input
// function confirmCharacters() {
//   var confirmation = window.confirm("You requested your pass word be " + numofCharacters + " characters. Is this correct?");
//   if (confirmation === false) {
//     requestCharacters();  
//   } else {
//     return;
//   }
// }


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
