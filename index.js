var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engine = /** @class */ (function () {
    function Engine(carData) {
        this.piston = carData.piston;
    }
    return Engine;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(carData) {
        var _this = _super.call(this, carData) || this;
        _this.color = carData.color;
        _this.noOfDoor = carData.noOfDoor;
        _this.brand = carData.brand;
        return _this;
    }
    Car.prototype.getData = function (clr, door, brandType, fuel) {
        console.log(clr, door, brandType, fuel);
    };
    Car.prototype.getengine = function () {
        console.log(this.engineNo, this.piston, this.boreDiameter, this.engineCC);
    };
    return Car;
}(Engine));
var Owner = /** @class */ (function (_super) {
    __extends(Owner, _super);
    function Owner(carData) {
        return _super.call(this, carData) || this;
    }
    Owner.prototype.getdetails = function () {
        console.log(this.getengine());
    };
    return Owner;
}(Car));
var car = new Owner({
    "color": 'white',
    "noOfDoor": 2,
    "brand": "BMW",
    "piston": 1000,
    "nationality": 'Indian',
    "name": 'ani',
    "bloodgroup": 'O+ve',
    "address": 'tuty'
});
car.getData('red', 4, 'alto', 'gas');
car.getData('red', 4, 'alto');
console.log(car.color);
car.getengine();
car.getdetails();
//onsole.log(car.piston);
