"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brandName, model, seats) {
        this.brandName = brandName;
        this.model = model;
        this.seats = seats;
    }
    Car.prototype.showInfo = function () {
        return "name: ".concat(this.brandName, ", model: ").concat(this.model, ", seats: ").concat(this.seats);
    };
    return Car;
}());
exports.Car = Car;
