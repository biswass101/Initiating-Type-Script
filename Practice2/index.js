//assigning type:
// (Explicit) (It will show error)
// let fName: string = "Niloy";
// fName = 23;
// console.log(fName);
// (Implicit) (It will show error))
// let fName = "Niloy";
// fName =23;
//the json can be parsed into any type
// const json = JSON.parse('565');
//Disable type checking:
var u = true;
u = "string";
console.log(Math.round(u));
//array
var names = ["Niloy"];
names.push("Rabbiu");
//array type inference
var numbers = [1, 2, 3];
numbers.push(4); //no error
// numbers.push('3'); //error
var head = numbers[0]; //no error
//Object Types
var car = {
    type: "Tyota",
    model: "Corolla",
    year: 200
};
//Infer Object types
var car2 = {
    type: "Toyota"
};
car2.type = "Ford";
// car.type = 2; //error
//Optional Properties:
var car3 = {
    type: "Toyota"
};
car3.mileague = 3000;
//index signatures -> Index signatures can be used for objects without a defined list of properties.
var nameAgeMap = {};
nameAgeMap.jack = 23;
// nameAgeMap.Mark = "fifty" //error
/* enums */
//numeric enums - default
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirction = CardinalDirections.North;
console.log(currentDirction); //zero
//numeric enums - initialized
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = 1] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 2] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 3] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 4] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
var currentDirction1 = CardinalDirections2.West;
console.log(currentDirction1); //4
//Numeric Enums - Fully Initialized
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["Accepted"] = 202] = "Accepted";
    statusCode[statusCode["BadRequest"] = 400] = "BadRequest";
})(statusCode || (statusCode = {}));
console.log(statusCode.BadRequest);
//String Enums
var direction;
(function (direction) {
    direction["East"] = "East";
    direction["West"] = "West";
    direction["North"] = "North";
    direction["South"] = "South";
})(direction || (direction = {}));
console.log(direction.North);
var carYear = 2001;
var carType = 'Totyota';
var carModel = 'Corolla';
var carr = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(carr);
var rectangle = {
    height: 10,
    widht: 20
};
console.log(rectangle);
var squre = {
    type: '2D',
    name: 'squre',
    arm: 10
};
var cube = {
    type: '3D',
    name: 'cube',
    arm: 20
};
var triangle = {
    type: '2D',
    name: 'triangle',
    height: 10,
    base: 5
};
console.log(squre, cube, triangle);
var coloredRectangle = {
    color: 'red',
    height: 10,
    widht: 20
};
//Union Types: Union types are used when a value can be more than a single type.
var printStatusCode = function (code) {
    console.log("My Status code is: ".concat(code));
};
printStatusCode(404);
printStatusCode('201');
//Union Type Error:
var statusCodee = function (code) {
    // console.log(`My status code is: ${code.toUpperCase()}`);
};
//TS Function-->
//return type
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//void return type
function printHello() {
    console.log("Priting Hello");
}
//parameters
function multiply(a, b) {
    return a * b;
}
//optional parameter
function add(a, b, c) {
    return a + b + (c || 0);
}
//default parameter
function pow(value, expo) {
    if (expo === void 0) { expo = 10; }
    return Math.pow(value, expo);
}
//Named Parameters
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 20, divisor: 10 }));
var negateFunction = function (value) { return value * -1; };
