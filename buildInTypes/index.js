//build-in data type: number, string, boolean, void, undefined, null
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "Niloy";
lastName = "Biswass";
isActivated = true;
fullName = firstName + ' ' + lastName;
console.log(userId, fullName, isActivated);
console.log(fullName.split(' '));
function display() {
    console.log("I am typeScript Func");
}
display();
