class Student3 {

    protected studentName: string;
    public age: number;

    constructor(studentName: string, age: number) {
        this.studentName = studentName;
        this.age = age;
    }

    display(): void {
        console.log(`username: ${this.studentName}, age: ${this.age}`);
    } 
}

class Ziloy extends Student3 {
    private studentId: number;
    constructor(studentName: string, age: number, studentId: number) {
        super(studentName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`username: ${this.studentName}, age: ${this.age} id: ${this.studentId}`);
    }

    setId(id: number):void {
        this.studentId = id;
    }

    getId():number {
        return this.studentId;
    }
}

let ziloy = new Ziloy("Naeem Biswass Ziloy", 25, 27223005101067);

// ziloy.display();


let xiloy = new Student3("Naeem Biswa xiloy", 23);
// xiloy.studentName = "Pinky";

xiloy.display();
console.log(xiloy);
ziloy.setId(122);
console.log((ziloy.getId()));


