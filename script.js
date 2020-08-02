// Assignment Code
var generateBtn = document.querySelector("#generate");


var upVal = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var valnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let special = ['"', "!", "@", "#", "$", "%", "%", "&", '*'];

var numberOfCharacters = parseInt(prompt("How many characters do you want in your password?"))

var pickedupperCaseArr = []

var pickednumbersArr = []

var pickedspecialArr = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

if (confirm("Would you like upper Case letters?")) {
  pickedupperCaseArr.push(upVal)
}

if (confirm("Would you like numbers?")) {
  pickedlowerCaseArr.push(valnumbers)
}
if (confirm("Would you like special characters?")) {
  pickedspecialArr.push(special)
}
console.log(numberOfCharacters, pickedUpperCaseArr, pickednumbersArr, pickedspecialArr)

for (var Z = 0; Z < numberOfCharacters; Z++) {
  var randomCharacters = Math.floor(Math.random() * pickedupperCaseArr.length);
  var randomnumbers = Math.floor(Math.random() * pickednumbersArr[randomCharacters].length);
  var randomspecial = pickednumbersArr[randomCharacter][randomnumbers]

  pickednumbersArr.push(numbers)
  console.log(randomCharacter, randomnumbers, randomspecial)
}
console.log(pickednumbersArr)


  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  function generatePassword() {
  var numberOfCharacters = parseInt(prompt('Password length?'))
  console.log(numberOfCharacters)
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert('Your password must be between 8 and 128 characters!')
    return ''
  }
}
