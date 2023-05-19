"use strict";
// Commented code is invalid typescript
let greet;
greet = (name, greeting) => {
    console.log(`${greeting} ${name}`);
};
let calc;
calc = (num1, num2, str) => {
    if (str == "add") {
        return num1 + num2;
    }
    else if (str == "sub") {
        return num1 - num2;
    }
    else {
        return 0;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old!!`);
};
logDetails({ name: "modi", age: 70 });
logDetails = (shinobi) => {
    console.log(`${shinobi.name} is ${shinobi.age} years old!!`);
};
logDetails({ name: "yoda", age: 140 });
