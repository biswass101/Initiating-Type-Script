"use strict";
exports.__esModule = true;
// import { studentName , studentAge} from "./student";
// import { studentName as name, studentAge as age} from "./student";
var Student = require("./student");
var CarClass_1 = require("./CarClass");
function displayStudentInfo() {
    console.log("".concat(Student.studentName, ", ").concat(Student.studentAge));
}
displayStudentInfo();
var ferrari = new CarClass_1.Car("Ferrari", "fr23434", 4);
console.log(ferrari.showInfo());
