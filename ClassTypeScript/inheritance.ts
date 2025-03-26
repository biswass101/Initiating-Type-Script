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
    
}

//class object
let user2 = new Student1("Niloy Biswass", 23);
user2.display();                                                                                                                                                                                                                                                                                