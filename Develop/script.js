// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E"];
var numbers = [1, 2, 3, 4, 5];
var specialChar = ["!", "@", "#", "$", "%"];
var userPassword = [];
var selectedChars = [];
var userLength = prompt("How many characters do you want to use?");
var userNum = confirm("Do you want Numbers?");
var userLet = confirm("Do you want letters?");
var userSpec = confirm("Do you want specail chars?");





if (userNum === true) {
    selectedChars = selectedChars.concat(numbers);
};


if (userLet === true) {

    selectedChars = selectedChars.concat(letters);

};

if (userSpec === true) {

    selectedChars = selectedChars.concat(specialChar);

};






function randomizar(arr) {

    for (var i = 0; i < userLength; i++) {
        var ranChar = Math.floor(Math.random() * arr.length);

        var list = arr[ranChar];
        userPassword.push(list);




    }


};


randomizar(selectedChars);
// generateBtn.addEventListener("click", writePassword);






function writePassword() {
    // var password = generatePassword();
    randomizar(selectedChars);
    var passwordText = document.querySelector("#password");


    // passwordText.value = password;
    passwordText.value = userPassword;


};

// Add event listener to generate button
// randomizar(selectedChars);
generateBtn.addEventListener("click", writePassword);