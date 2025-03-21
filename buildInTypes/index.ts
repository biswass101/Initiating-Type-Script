//build-in data type: number, string, boolean, void, undefined, null

let userId : number;
let firstName : String;
let lastName : String;
let fullName : String;
let isActivated : boolean; 

userId = 101;
firstName = "Niloy";
lastName = "Biswass";
isActivated = true;

fullName = firstName + ' ' + lastName;

console.log(userId, fullName, isActivated);
console.log(fullName.split(' '));

function display() : void {
    console.log("I am typeScript Func");
}

display();