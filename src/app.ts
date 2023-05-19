import Invoice from "./classes/invoice.js";
import ListTemplate from "./classes/listTemplate.js";
import { Payment } from "./classes/payments.js";
import { hasFormatter } from "./interfaces/hasFormatter.js";

let docOne: hasFormatter;
let docTwo: hasFormatter;

docOne = new Invoice("krish", "website", 1000);
docTwo = new Payment("darm", "lorem", 1234);

let docs: hasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

// console.log(docs);

// const inv1 = new Invoice("mario", "work on the new blog", 1000);
// const inv2 = new Invoice("modi", "coding", 100000);
// let invoices: Invoice[] = [];
//
// invoices.push(inv1);
// invoices.push(inv2);
//
// invoices.forEach((inv) => {
//   console.log(inv.format());
// });

const form = document.querySelector("form.new-item-form") as HTMLFormElement;

// input fields
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let doc: hasFormatter;

  if (type.value == "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }
  const ul = document.querySelector("ul") as HTMLUListElement;
  const list = new ListTemplate(ul);
  list.render(doc, type.value, "end");
  console.log(doc);
});
