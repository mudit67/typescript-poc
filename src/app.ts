// const anchor = document.querySelector("a")!;

// console.log(anchor.href);
// valid
// if (anchor) {
//   console.log(anchor.href);
// }

// console.log(anchor?.href); // Valid ts

// const form = document.querySelector("form")!;
const form = document.querySelector("form.new-item-form") as HTMLFormElement;

// input fields
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
