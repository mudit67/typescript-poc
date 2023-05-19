// Commented code is invalid typescript

// Explicit types

let character: string;
let age: Number;
let isCoding: boolean;

age = 19;
// isCoding = "yes";

// Arrays

let ninjas: string[] = []; //best to initialize an empty array to be able to use the push method

// ninjas= [1,2]

ninjas.push("modi");

// Union types

let arr: (string | number)[] = [];

arr.push("hello");
arr.push(24);
// arr.push(true);

console.log(arr);

let uid: string | number;

uid = 987653234567;
uid = "asghgju5423";

// Object

let personOne: object;

personOne = { name: "yoshi", age: 50 };
personOne = ["modi", 70];

let personTwo: { name: string; age: number; class: string };

personTwo = {
  name: "modi",
  age: 18,
  class: "overload",
  // skills: ["coding", "running"],
};
