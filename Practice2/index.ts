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
let u: any = true;
u = "string";
console.log(Math.round(u));

//array
const names: string[] = ["Niloy"];
names.push("Rabbiu");

//array type inference
const numbers = [1, 2, 3];
numbers.push(4); //no error
// numbers.push('3'); //error
let head: Number = numbers[0]; //no error

//Object Types
const car: {type : string, model: string, year: number} = {
    type : "Tyota",
    model : "Corolla",
    year : 200 
};

//Infer Object types
const car2 = {
    type : "Toyota",
}
car2.type = "Ford";
// car.type = 2; //error

//Optional Properties:
const car3: {type: string, mileague?: number} = {
    type: "Toyota"
}

car3.mileague = 3000;

//index signatures -> Index signatures can be used for objects without a defined list of properties.
const nameAgeMap: {[index: string] : number} = {};

nameAgeMap.jack = 23
// nameAgeMap.Mark = "fifty" //error

/* enums */
//numeric enums - default
enum CardinalDirections {
    North,
    East,
    South,
    West
}

let currentDirction = CardinalDirections.North;
console.log(currentDirction); //zero

//numeric enums - initialized
enum CardinalDirections2 {
    North = 1,
    East,
    South,
    West
}

let currentDirction1 = CardinalDirections2.West;
console.log(currentDirction1); //4


//Numeric Enums - Fully Initialized
enum statusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
}
console.log(statusCode.BadRequest);

//String Enums
enum direction {
    East = 'East',
    West = 'West',
    North = 'North',
    South = 'South'
}

console.log(direction.North);

//Type Aliases -> Type Aliases allow defining types with a custom name (an Alias).
type CarYear = number;
type CarType = string;
type CarModel = string;

type Carr = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001;
const carType: CarType = 'Totyota';
const carModel: CarModel = 'Corolla';
const carr: Carr = {
    year: carYear,
    type: carType,
    model: carModel
}

console.log(carr);

//Interfaces: Interfaces are similar to type aliases, except they only apply to object types.
interface IRectangel {
    height: number
    widht: number
}

const rectangle: IRectangel = {
    height: 10,
    widht: 20
}
console.log(rectangle);

interface IShape {
    type: string
    name: string
    arm?: number
    length?: number
    widht?: number
    height?: number
    base?: number
}

const squre: IShape = {
    type: '2D',
    name: 'squre',
    arm: 10
}

const cube: IShape = {
    type: '3D',
    name: 'cube',
    arm: 20
}

const triangle: IShape = {
    type: '2D',
    name: 'triangle',
    height: 10,
    base: 5
}
console.log(squre, cube, triangle);

//Extending Interfaces: Interfaces can extend each other's definition.
interface IcoloredRectangle extends IRectangel {
    color: string
}

const coloredRectangle: IcoloredRectangle = {
    color: 'red',
    height: 10,
    widht: 20
}

//Union Types: Union types are used when a value can be more than a single type.
const printStatusCode = (code: string | number) => {
    console.log(`My Status code is: ${code}`);
};

printStatusCode(404);
printStatusCode('201');

//Union Type Error:
const statusCodee = (code: string | number) => {
    // console.log(`My status code is: ${code.toUpperCase()}`);
}

//TS Function-->

//return type
function getTime(): number {
    return new Date().getTime();
}
console.log(getTime());


//void return type
function printHello():void {
    console.log("Priting Hello");
}

//parameters
function multiply(a: number, b: number):number {
    return a * b;
}

//optional parameter
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

//default parameter
function pow(value: number, expo: number = 10) {
    return value ** expo;
}

//Named Parameters
function divide({dividend, divisor}: {dividend: number, divisor: number}){
    return dividend / divisor;
}

console.log(divide({dividend: 20, divisor: 10}));

//type alias(function signature)
type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;