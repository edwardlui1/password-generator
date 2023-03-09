// Assignment Code

// Write password to the #password input
// need to make generatePassword function
// prompt user
  // number of characters
    // make sure number is not less than 8 or greater than 128
    // make sure input is a number not string etc.
      // need if statement with multiple conditions
  // define characters into arrays
    // lower, upper, numeric, special characters
// validate input
// generate password
  // make a for loop going until amount of characters wanted
// display password

var generateBtn = document.querySelector("#generate");

var characterLength = 8;
var characterChoice = [];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', '<', '>', ',', '.', '/', '?'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function askPrompts() {
  characterChoice = [];
  characterLength = prompt("What will be the length of your password? (8 - 128 characters)")

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a number between 8 - 128. Try again");
    return false;
  }

  if (confirm("Do you want lowercase letters in your password?")) {
    characterChoice = characterChoice.concat(lowercaseCharacters);
  }
  if (confirm("Do you want uppercase letters in your password?")) {
    characterChoice = characterChoice.concat(uppercaseCharacters);
  }
  if (confirm("Do you want numbers in your password?")) {
    characterChoice = characterChoice.concat(numberCharacters);
  }
  if (confirm("Do you want special characters in your password?")) {
    characterChoice = characterChoice.concat(specialCharacters);
  }
  return true;
}

function writePassword() {
  var truePrompts = askPrompts ();

  if (truePrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i <characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * characterChoice.length);
    password = password + characterChoice[randomCharacter];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
