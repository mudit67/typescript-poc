// Interfaces

interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(b: number): number;
}

const me: isPerson = {
  name: "modi",
  age: 18,
  speak(a): void {
    // speak(a): { // Invalid ts
    console.log(a);
  },
  spend(b): number {
    // spend(b): { // Invalid ts
    console.log(`I spent ${b}`);
    return b;
  },
  //   skills: ["coding","running"] // Invalid ts
};

console.log(me);

const greet = (pers: isPerson) => {
  console.log(`hello ${pers.name}`);
};

greet(me);

// greet({name:"modi"}) // Invalid ts

let person: isPerson;

import Invoice from "./classes/invoice.js";

const inv1 = new Invoice("mario", "work on the new blog", 1000);
const inv2 = new Invoice("modi", "coding", 100000);
let invoices: Invoice[] = [];

invoices.push(inv1);
invoices.push(inv2);

invoices.forEach((inv) => {
  console.log(inv.format());
});

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
