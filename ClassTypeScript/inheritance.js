var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student1 = /** @class */ (function () {
    function Student1(studentName, age) {
        this.studentName = studentName;
        this.age = age;
    }
    Student1.prototype.display = function () {
        console.log("username: ".concat(this.studentName, ", age: ").concat(this.age));
    };
    return Student1;
}());
var Niloy = /** @class */ (function (_super) {
    __extends(Niloy, _super);
    function Niloy(studentName, age, studentId) {
        var _this = _super.call(this, studentName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Niloy.prototype.display = function () {
        console.log("username: ".concat(this.studentName, ", age: ").concat(this.age, " id: ").concat(this.studentId));
    };
    return Niloy;
}(Student1));
var niloy = new Niloy("Naeem Biswass Niloy", 12, 27223005101065);
niloy.display();
// //class object
// let user2 = new Student1("Niloy Biswass", 23);
// user2.display();                                                                                                                                                                                                                                                                                
