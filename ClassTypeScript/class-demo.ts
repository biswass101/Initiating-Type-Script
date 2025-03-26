class Student {
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

//class object
let user1 = new Student("Niloy Biswass", 23);
user1.display();