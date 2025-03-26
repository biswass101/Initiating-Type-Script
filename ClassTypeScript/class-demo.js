var Student = /** @class */ (function () {
    function Student(studentName, age) {
        this.studentName = studentName;
        this.age = age;
    }
    Student.prototype.display = function () {
        console.log("username: ".concat(this.studentName, ", age: ").concat(this.age));
    };
    return Student;
}());
//class object
var user1 = new Student("Niloy Biswass", 23);
user1.display();
