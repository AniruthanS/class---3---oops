  
type fuelType = 'petrol' | 'diesel' | 'gas';

interface CarConfiguration {
    color: string;
    noOfDoor: number;
    brand: string;
    piston: number;
    nationality: string;
    name: string;
    bloodgroup: string;
    address: string;

}

class Engine {
    engineNo: number;
    piston: number;
    boreDiameter: number;
    engineCC: number;

    constructor(carData: CarConfiguration) {
        this.piston = carData.piston;
    }

}

class Car extends Engine {

    //properties
    color: string;
    noOfDoor: number;
    brand: string;
    model: string;

    constructor(carData: CarConfiguration) {
        super(carData);

        this.color = carData.color;
        this.noOfDoor = carData.noOfDoor;
        this.brand = carData.brand;
    }

    getData(clr: string, door: number, brandType: string, fuel?: string) {
        console.log(clr, door, brandType, fuel);
    }
    getengine(){
        console.log(this.engineNo,this.piston,this.boreDiameter,this.engineCC);
    }

}

class Owner extends Car {



    constructor(carData: CarConfiguration) {
        super(carData);

       
    }
    getdetails(){
        console.log(this.getengine());
    }

}



let car = new Owner({
    "color": 'white',
    "noOfDoor": 2,
    "brand": "BMW",
    "piston": 1000,
    "nationality": 'Indian',
    "name": 'ani',
    "bloodgroup": 'O+ve',
    "address": 'tuty',
});
car.getData('red', 4, 'alto', 'gas');

car.getData('red', 4, 'alto');

console.log(car.color);

car.getengine();
car.getdetails();
//onsole.log(car.piston);
















