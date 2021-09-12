// Assignment code here
function generatePassword() {
  // variables for criteria defined
  var passwordLength = window.prompt("Please select password length (must be at least 8 characters and no more than 128).")
  // var passwordCharacters = window.prompt("Please select character types to include. Choose from lowercase, uppercase, numeric, and/or special characters.")
  
  passwordLength

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);