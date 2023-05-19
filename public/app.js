"use strict";
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
// valid
// if (anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor?.href); // Valid ts
// const form = document.querySelector("form")!;
const form = document.querySelector("form.new-item-form");
// input fields
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
