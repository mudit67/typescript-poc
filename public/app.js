"use strict";
// Classes
class Invoice {
    //   readonly client: string;
    //   private details: string;
    //   amount: number;
    constructor(client, details, amount // access modifiers are required
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    format() {
        return `${this.client} owes ₹${this.amount} for ${this.details}`;
    }
}
const inv1 = new Invoice("mario", "work on the new blog", 1000);
const inv2 = new Invoice("modi", "coding", 100000);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach((inv) => {
    //   console.log(inv.client, inv.details, inv.amount, inv.format());
    //   inv.client = "modi";
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
