// Classes

class Invoice {
  client: string;
  details: string;
  amount: number;
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    return `${this.client} owes ₹${this.amount} for ${this.details}`;
  }
}

const inv1 = new Invoice("mario", "work on the new blog", 1000);
const inv2 = new Invoice("modi", "coding", 100000);

// console.log(inv1, inv2);

let invoices: Invoice[] = [];
// invoices.push("hello"); //invalid ts

invoices.push(inv1);
invoices.push(inv2);

inv1.client = "yogi adi";
inv2.amount = 12345678;
console.log(inv1, inv2);

console.log(invoices);

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
