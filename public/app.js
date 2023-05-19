// Interfaces
const me = {
    name: "modi",
    age: 18,
    speak(a) {
        // speak(a): { // Invalid ts
        console.log(a);
    },
    spend(b) {
        // spend(b): { // Invalid ts
        console.log(`I spent ${b}`);
        return b;
    },
    //   skills: ["coding","running"] // Invalid ts
};
console.log(me);
const greet = (pers) => {
    console.log(`hello ${pers.name}`);
};
greet(me);
// greet({name:"modi"}) // Invalid ts
let person;
import Invoice from "./classes/invoice.js";
const inv1 = new Invoice("mario", "work on the new blog", 1000);
const inv2 = new Invoice("modi", "coding", 100000);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach((inv) => {
    console.log(inv.format());
});
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
