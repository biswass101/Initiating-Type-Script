class Student1 {
    //properties, methodes, constructor
    studentName: string;
    age: number;

    constructor(studentName: string, age: number) {
        this.studentName = studentName;
        this.age = age;
    }

    display(): void {
        console.log(`username: ${this.studentName}, age: ${this.age}`);
    }
}

class Niloy extends Student1 {
    studentId: number;
    constructor(studentName: string, age: number, studentId: number) {
        super(studentName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`username: ${this.studentName}, age: ${this.age} id: ${this.studentId}`)
    }
}

let niloy = new Niloy("Naeem Biswass Niloy", 12, 27223005101065);
niloy.display();

// //class object
// let user2 = new Student1("Niloy Biswass", 23);
// user2.display();                                                                                                                                                                                                                                                                                