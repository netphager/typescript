var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var foo;
var Point = (function () {
    function Point(x, y) {
        this.p1 = x;
        this.p2 = y;
    }
    Point.add = function (p1, p2) {
        return new Point(p1, p2);
    };
    Point.prototype.getP1 = function () {
        return this.p1;
    };
    Point.prototype.getP2 = function () {
        return this.p2;
    };
    return Point;
})();
var Car = (function () {
    function Car() {
        this.type = 'car';
        this.fuel = 'gasoline';
    }
    Object.defineProperty(Car.prototype, "Type", {
        get: function () {
            return this.type;
        },
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Price", {
        get: function () {
            return this.price;
        },
        set: function (price) {
            this.price = price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Mark", {
        get: function () {
            return this.mark;
        },
        set: function (mark) {
            this.mark = mark;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Model", {
        get: function () {
            return this.model;
        },
        set: function (model) {
            this.model = model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Hp", {
        get: function () {
            return this.hp;
        },
        set: function (hp) {
            this.hp = hp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Fuel", {
        get: function () {
            return this.fuel;
        },
        set: function (fuel) {
            this.fuel = fuel;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
})();
var sum = function (a, b) {
    return a + b;
};
var BMW = (function (_super) {
    __extends(BMW, _super);
    function BMW() {
        _super.apply(this, arguments);
        this.mark = "BMW";
    }
    return BMW;
})(Car);
;
var bmw = new BMW();
bmw.Model = 'e46';
bmw.Price = 10000;
bmw.Hp = 150;
bmw.Fuel = 'diesel';
var p = new Point({ x: 1, y: 1 }, { x: 2, y: 2 });
console.log(bmw);
console.log(p);
console.log(Point.add({ x: 3, y: 3 }, { x: 4, y: 4 }));
//# sourceMappingURL=app.js.map