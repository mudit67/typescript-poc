// Commented code is invalid typescript

let greet: (a: string, b: string) => void;
greet = (name, greeting) => {
  console.log(`${greeting} ${name}`);
};

let calc: (a: number, b: number, c: string) => number;
calc = (num1, num2, str) => {
  if (str == "add") {
    return num1 + num2;
  } else if (str == "sub") {
    return num1 - num2;
  } else {
    return 0;
  }
};

let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (ninja) => {
  console.log(`${ninja.name} is ${ninja.age} years old!!`);
};
logDetails({ name: "modi", age: 70 });
type person = { name: string; age: number };
logDetails = (shinobi: person) => {
  console.log(`${shinobi.name} is ${shinobi.age} years old!!`);
};
logDetails({ name: "yoda", age: 140 });
