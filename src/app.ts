// Classes

class Invoice {
  //   readonly client: string;
  //   private details: string;
  //   amount: number;
  constructor(
    readonly client: string,
    private details: string,
    public amount: number // access modifiers are required
  ) {
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
let invoices: Invoice[] = [];

invoices.push(inv1);
invoices.push(inv2);

invoices.forEach((inv) => {
  //   console.log(inv.client, inv.details, inv.amount, inv.format());
  //   inv.client = "modi";
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
