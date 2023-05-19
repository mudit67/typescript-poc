// Commented code is invalid typescript

let age: any = 25;
age = "twenty five";
console.log(age);
age = true;
console.log(age);
age = { name: "luigi" };
console.log(age);

let arr: any[] = [];

arr.push("modi");
arr.push(18);
arr.push("true");

let ninja: { name: any; age: any };

ninja = { name: "hitman", age: 28 };
console.log(ninja);

ninja = { name: 47, age: "twenty eight" };
console.log(ninja);
