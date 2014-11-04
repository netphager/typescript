var foo: string;
interface IPoint {
    x: number;
    y: number;
}

interface IThreeDPoint extends Point {
    z: number;
}

class Point {

    private p1: IPoint;
    private p2: IPoint;

    static add(p1: IPoint,p2: IPoint) {
        return new Point(p1,p2);
    }

    constructor(x: IPoint,y: IPoint) {
        this.p1 = x;
        this.p2 = y;
    }

    getP1() {
        return this.p1;
    }

    getP2() {
        return this.p2;
    }

}
//
class Car {
    price: number;
    mark: string;
    hp: number;
    type: string = 'car';
    model: string;
    fuel: string = 'gasoline';

    get Type() {
        return this.type;
    }
    set Type(type) {
        this.type = type;
    }

    set Price(price) {
        this.price = price;
    }
    get Price() {
        return this.price;
    }

    get Mark() {
        return this.mark;
    }
    set Mark(mark) {
        this.mark = mark;
    }

    get Model() {
        return this.model;
    }
    set Model(model) {
        this.model = model;
    }

    get Hp() {
        return this.hp;
    }
    set Hp(hp) {
        this.hp = hp;
    }

    get Fuel() {
        return this.fuel;
    }
    set Fuel(fuel) {
        this.fuel = fuel;
    }

}

var sum = (a: number,b: number) => {
    return a + b;
};

class BMW extends Car {
    mark = "BMW";
};


var bmw = new BMW();
bmw.Model = 'e46';
bmw.Price = 10000;
bmw.Hp = 150;
bmw.Fuel = 'diesel';

var p = new Point({x:1,y:1},{x:2 , y:2});
console.log(bmw);
console.log(p);
console.log(Point.add({x:3,y:3},{x: 4,y:4}))