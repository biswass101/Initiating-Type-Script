// import { studentName , studentAge} from "./student";
// import { studentName as name, studentAge as age} from "./student";
import * as Student from './student';
import {Car} from './CarClass';

function displayStudentInfo(): void {
    console.log(`${Student.studentName}, ${Student.studentAge}`);
}
displayStudentInfo();

let ferrari = new Car("Ferrari", "fr23434", 4);
console.log(ferrari.showInfo());
