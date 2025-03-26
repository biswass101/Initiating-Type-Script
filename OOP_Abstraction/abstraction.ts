abstract class Student2 {
    //properties, methodes, constructor
    studentName: string;
    age: number;

    constructor(studentName: string, age: number) {
        this.studentName = studentName;
        this.age = age;
    }

    abstract display(): void 
}

class Piloy extends Student2 {
    studentId: number;
    constructor(studentName: string, age: number, studentId: number) {
        super(studentName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`username: ${this.studentName}, age: ${this.age} id: ${this.studentId}`)
    }
}

let piloy = new Piloy("Naeem Biswass Piloy", 24, 27223005101066);
piloy.display();
