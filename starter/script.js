// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  var lowerCase = false,
  upperCase = false,
  numeric = false,
  specialCase = false;

  var length = prompt("Please choose your password length");
  console.log(length);

  if (length>=10 && length <= 64) {
    alert("Click OK to continue");

  while (!lowerCase && !upperCase && !numeric && !specialCase) {

    lowerCase = confirm("Include lowercase characters?");
    console.log(lowerCase);

    upperCase = confirm("include uppercase characters?");
    console.log(upperCase);

    numeric = confirm("Include numeric values?");
    console.log(numeric);

    specialCase = confirm("Include special characters?");
    console.log(specialCase);

  if (!lowerCase && !upperCase && !numeric && !specialCase)

    alert("Please select at least one character type!");

  else if (!lowerCase || !upperCase || !numeric || !specialCase)

    alert("Thank you")
  }
}
  else if (length<10) {
    alert("Password too short. Try again");
  }
  else if (length>64) {
    alert("passowrd too long. Try again");
  }
}
console.log (getPasswordOptions())


// Function for getting a random element from an array
function getRandom(arr) {

}


// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);