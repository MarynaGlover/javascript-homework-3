//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = args[0];
        for (let i = 0; i < args.length; i++) {
            if (args[i] < min) {
                min = args[i];
            }
        }
        return min;
    }
}

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
    return 2 * 3.14159265359 * circle.radius;
    console.log(circle);
}

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
}
    introduce() {
        return super.introduce();
    }
}
class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }
    introduce() {
        return super.introduce() + "  Meow meow!";
    }
}
class Dog extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "dog", status);
    }
    introduce() {
        return super.introduce();
    }
    greetMaster() {
        return "Hello Eliza";
    }
}

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
    var five = [];
    for (var key in obj) {
        if (key.length == 5) {
            five.push(key);
        }
        console.log(key);
    }
    for (var key in obj) {
        if (obj[key].length == 5) {
            five.push(obj[key]);
        }
        console.log(obj[key].length);

        console.log(five);
    }
    return five;
}
