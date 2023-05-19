"use strict";
// Commented code is invalid typescript
let greet;
greet = () => {
    console.log("hello, World!");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 7, "sup");
const subs = (a, b) => {
    return a - b;
};
let result = subs(7, 17);
// result = "sup";
