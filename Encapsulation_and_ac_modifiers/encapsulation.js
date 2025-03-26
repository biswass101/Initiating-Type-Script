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
var Student3 = /** @class */ (function () {
    function Student3(studentName, age) {
        this.studentName = studentName;
        this.age = age;
    }
    Student3.prototype.display = function () {
        console.log("username: ".concat(this.studentName, ", age: ").concat(this.age));
    };
    return Student3;
}());
var Ziloy = /** @class */ (function (_super) {
    __extends(Ziloy, _super);
    function Ziloy(studentName, age, studentId) {
        var _this = _super.call(this, studentName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Ziloy.prototype.display = function () {
        console.log("username: ".concat(this.studentName, ", age: ").concat(this.age, " id: ").concat(this.studentId));
    };
    Ziloy.prototype.setId = function (id) {
        this.studentId = id;
    };
    Ziloy.prototype.getId = function () {
        return this.studentId;
    };
    return Ziloy;
}(Student3));
var ziloy = new Ziloy("Naeem Biswass Ziloy", 25, 27223005101067);
// ziloy.display();
var xiloy = new Student3("Naeem Biswa xiloy", 23);
// xiloy.studentName = "Pinky";
xiloy.display();
console.log(xiloy);
ziloy.setId(122);
console.log((ziloy.getId()));
