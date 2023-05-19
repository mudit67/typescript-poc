// Commented code is invalid typescript

let greet: Function;

greet = () => {
  console.log("hello, World!");
};

const add = (a: number, b: number, c: number | string = 10): any => {
  console.log(a + b);
  console.log(c);
};

add(5, 7, "sup");

const subs = (a: number, b: number): number => {
  return a - b;
};

let result = subs(7, 17);
// result = "sup";
