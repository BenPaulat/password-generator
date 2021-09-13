// Assignment code here
function generatePassword() {

  // variables for criteria defined
  var passwordLength = prompt("Please select password length (must be at least 8 characters and no more than 128).");
  var passwordLowercase = window.confirm("Include Lowercase characters in your password? (OK for Yes, Cancel for No)");
  var passwordUppercase = window.confirm("Include Uppercase characters in your password? (OK for Yes, Cancel for No)");
  var passwordNumeric = window.confirm("Include Numbers in your password? (OK for Yes, Cancel for No)");
  var passwordSpecial = window.confirm("Include Special characters in your password? (OK for Yes, Cancel for No)");

  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters = "0123456789";
  var specialCharacters = "!#$%&()*+,-./:;<=>?@]/[^_`{|}~";

  var characterOption = "";

  // characterOption builder section
  if (passwordLowercase === true) {
    characterOption = characterOption + lowercaseLetters
  }
  if (passwordUppercase === true) {
    characterOption = characterOption + uppercaseLetters
  }
  if (passwordNumeric === true) {
    characterOption = characterOption + numberCharacters
  }
  if (passwordSpecial === true) {
    characterOption = characterOption + specialCharacters
  }

  // index number random selector
  function indexSelector(min) {
    var index = Math.floor(Math.random() * min);
  }

  // run indexSelector to randomly chose index number based on the length of characterOption
  indexSelector(characterOption.length);


  
  var password = "";
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