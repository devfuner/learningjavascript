(function() {
    const SYM = Symbol();
    const o = {a: 1, b: 2, c: 3, [SYM]: 4};

    for (let prop in o) {
        if (!o.hasOwnProperty(prop)) continue;

        let run = false;
        if (run) {
            console.log(`${prop}: ${o[prop]}`);
        }
    }
    /*
    a: 1
    b: 2
    c: 3
     */

// Object.keys()에서는 hasOwnProperty를 체크할 필요는 없음.
    Object.keys(o).forEach(prop => {
        let run = false;
        if (run) {
            console.log(`${prop}: ${o[prop]}`)
        }
    });
    /*
    a: 1
    b: 2
    c: 3
     */

// 객체에서 프로퍼티가 x로 시작하는 것만 가져오기
    const o2 = {apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5};
    Object.keys(o2).filter(prop => prop[0] === 'x').forEach(prop => {
        let run = false;
        if (run) {
            console.log(`${prop}: ${o2[prop]}`)
        }
    });
    Object.keys(o2).filter(prop => prop.match(/^x/)).forEach(prop => {
        let run = false;
        if (run) {
            console.log(`${prop}: ${o2[prop]}`)
        }
    });
})();


// class
(function() {
    class Car {
        constructor() {

        }
    }

    let run = false;
    if (run) {
        const car1 = new Car();
        const car2 = new Car();
        console.log(car1 instanceof Car); // true
        console.log(car1 instanceof Array); // false
    }
})();

(function() {
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.userGears = ['P', 'N', 'R', 'D'];
            this.userGear = this.userGears[0];
        }

        shift(gear) {
            if (this.userGears.indexOf(gear) < 0) {
                throw new Error(`Invalid gear: ${gear}`);
            }
            this.userGear = gear;
        }
    }

    let run = false;
    if (run) {
        const car1 = new Car("Tesla", "Model S");
        const car2 = new Car("Mazda", "3i");
        car1.shift('D');
        car2.shift('R');
        console.log(car1.userGear); // D
        console.log(car2.userGear); // R
    }
})();

(function() {
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            this._userGear = this._userGears[0];
        }

        get userGear() { return this._userGear; }
        set userGear(value) {
            if (this._userGears.indexOf(value) < 0) {
                throw new Error(`Invalid gear: ${value}`);
            }
            this._userGear = value;
        }

        shift(gear) {
            this.userGear = gear;
        }
    }

    let run = false;
    if (run) {
        const car1 = new Car("Tesla", "Model S");
        const car2 = new Car("Mazda", "3i");
        car1.shift('D');
        car2.shift('R');
        console.log(car1.userGear); // D
        console.log(car2.userGear); // R
    }
})();

/**
 * 아래처럼 Car를 만들면 외부에서 userGear에 접근할 수 없다.
 */
(function() {
    const Car = (function() {
        const carProps = new WeakMap();

        class Car {
            constructor(make, model) {
                this.make = make;
                this.model = model;
                this._userGears = ['P', 'N', 'R', 'D'];
                carProps.set(this, { userGear: this._userGears[0] });
            }

            get userGear() { return carProps.get(this).userGear; }
            set userGear(value) {
                if (this._userGears.indexOf(value) < 0) {
                    throw new Error(`Invalid gear: ${value}`);
                }
                carProps.get(this).userGear = value;
            }

            shift(gear) { this.userGear = gear; }
        }

        return Car;
    })();
})();

(function() {
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.userGears = ['P', 'N', 'R', 'D'];
            this.userGear = this.userGears[0];
        }

        shift(gear) {
            if (this.userGears.indexOf(gear) < 0) {
                throw new Error(`Invalid gear: ${gear}`);
            }
            this.userGear = gear;
        }
    }

    let run = false;
    if (run) {
        const car1 = new Car();
        const car2 = new Car();
        console.log(car1.shift === Car.prototype.shift); // true
        car1.shift('D');
        // car1.shift('d'); // error
        console.log(car1.userGear); // D
        console.log(car1.shift === car2.shift); // true

        car1.shift = function(gear) { this.userGear = gear.toUpperCase(); };
        console.log(car1.shift === Car.prototype.shift); // false
        console.log(car1.shift === car2.shift); // false
        car1.shift('d');
        console.log(car1.userGear); // D
    }
})();

(function() {
    class Car {
        static getNextVin() {
            return Car.nextVin++;
        }
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.vin = Car.getNextVin();
        }

        static areSimilar(car1, car2) {
            return car1.make === car2.make && car1.model === car2.model;
        }

        static areSame(car1, car2) {
            return car1.vin === car2.vin;
        }
    }

    let run = false;
    if (run) {
        Car.nextVin = 0;

        const car1 = new Car("Tesla", "S");
        const car2 = new Car("Mazda", "3");
        const car3 = new Car("Mazda", "3");

        console.log(car1.vin); // 0
        console.log(car2.vin); // 1
        console.log(car3.vin); // 2

        console.log(Car.areSimilar(car1, car2)); // false
        console.log(Car.areSimilar(car2, car3)); // true
        console.log(Car.areSame(car2, car3)); // false
        console.log(Car.areSame(car2, car2)); // true
    }
})();


(function() {
    // 운송수단
    class Vehicle {
        constructor() {
            this.passengers = [];
            console.log("Vehicle created");
        }
        addPassenger(p) {
            this.passengers.push(p);
        }
    }

    class Car extends Vehicle {
        constructor() {
            super();
            console.log("Car created");
        }
        deployAirbags() {
            console.log("BWOOSH!");
        }
    }

    let run = false;
    if (run) {
        const v = new Vehicle();
        v.addPassenger("Frank");
        v.addPassenger("Judy");
        console.log(v.passengers); // [ 'Frank', 'Judy' ]

        const c = new Car();
        c.addPassenger("Alice");
        c.addPassenger("Cameron");
        console.log(c.passengers); // [ 'Alice', 'Cameron' ]

        // v.deployAirbags(); // error
        c.deployAirbags();
    }
})();


// 다형성
(function() {
    class Vehicle {
        constructor() {
        }
    }

    class Car extends Vehicle {
        constructor() {
            super();
        }
    }

    let run = false;
    if (run) {
        class Motorcycle extends Vehicle {}
        const c = new Car();
        const m = new Motorcycle();
        console.log(c instanceof Car); // true
        console.log(c instanceof Vehicle); // true
        console.log(m instanceof Car); // false
        console.log(m instanceof Motorcycle); // true
        console.log(m instanceof Vehicle); // true
    }
})();


// 객체 프로퍼티 나열 다시 보기
(function() {
    class Super {
        constructor() {
            this.name = 'Super';
            this.isSuper = true;
        }
    }

    // 유효하지만, 권장하지는 않습니다.
    Super.prototype.sneaky = 'not recommended!';

    class Sub extends Super {
        constructor() {
            super();
            this.name = 'Sub';
            this.isSub = true;
        }
    }

    let run = false;
    if (run) {
        const obj = new Sub();

        for (let p in obj) {
            console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
        }
    }
})();


// 문자열 표현
(function() {
    class Car {
        static getNextVin() {
            return Car.nextVin++;
        }
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.vin = Car.getNextVin();
        }

        toString() {
            return `${this.make} ${this.model}: ${this.vin}`;
        }
    }

    let run = false;
    if (run) {
        Car.nextVin = 0;
        const car1 = new Car("Tesla", "S");
        const car2 = new Car("Mazda", "3");

        console.log(car1);
        console.log(car2);
    }
})();


// 다중 상속, 믹스인, 인터페이스
(function() {
    class Car {
        static getNextVin() {
            return Car.nextVin++;
        }
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.vin = Car.getNextVin();
        }

        toString() {
            return `${this.make} ${this.model}: ${this.vin}`;
        }
    }

    class InsurancePolicy {}
    function makeInsurable(o) {
        o.addInsurancePolicy = function(p) { this.insurancePolicy = p; };
        o.getInsurancePolicy = function() { return this.insurancePolicy; };
        o.isInsured = function() { return this.insurancePolicy; };
    }

    let run = false;
    if (run) {
        makeInsurable(Car);
        const car1 = new Car();
        car1.addInsurancePolicy(new InsurancePolicy()); // error
    }

    run = false;
    if (run) {
        const car1 = new Car();
        makeInsurable(car1);
        car1.addInsurancePolicy(new InsurancePolicy()); // works

        /**
         * 객체에 개별적으로 추가하는 기능이면 이렇게 해도 되지만
         * Car 클래스로 생성하는 여러 객체에서 해당 기능을 사용해야 한다면
         * 위의 방법으로는 생성하는 모든 객체마다 makeInsurable를 실행해줘야 한다.
         */
    }

    run = false;
    if (run) {
        makeInsurable(Car.prototype);
        const car1 = new Car();
        car1.addInsurancePolicy(new InsurancePolicy()); // works

        /**
         * 위의 문제를 해결한 결과이다!
         */
    }
})();