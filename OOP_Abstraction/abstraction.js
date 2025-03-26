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
var Student2 = /** @class */ (function () {
    function Student2(studentName, age) {
        this.studentName = studentName;
        this.age = age;
    }
    return Student2;
}());
var Piloy = /** @class */ (function (_super) {
    __extends(Piloy, _super);
    function Piloy(studentName, age, studentId) {
        var _this = _super.call(this, studentName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Piloy.prototype.display = function () {
        console.log("username: ".concat(this.studentName, ", age: ").concat(this.age, " id: ").concat(this.studentId));
    };
    return Piloy;
}(Student2));
var piloy = new Piloy("Naeem Biswass Piloy", 24, 27223005101066);
piloy.display();
