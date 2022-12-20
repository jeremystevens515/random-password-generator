console.log("hello, world");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define generatePassword function
function generatePassword() {
  console.log("you clicked the button")
  return "generated password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
