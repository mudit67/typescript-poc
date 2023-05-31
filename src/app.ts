import Invoice from "./classes/invoice.js";
import ListTemplate from "./classes/listTemplate.js";
import { Payment } from "./classes/payments.js";
import { hasFormatter } from "./interfaces/hasFormatter.js";
const form = document.querySelector("form.new-item-form") as HTMLFormElement;

// input fields
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let doc: hasFormatter;

  let values: [string, string, number] = [
    toFrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  if (type.value == "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  const ul = document.querySelector("ul") as HTMLUListElement;
  const list = new ListTemplate(ul);
  list.render(doc, type.value, "end");
  console.log(doc);
});

// Lists

let tup: [string, number, boolean];

tup = ["modi", 7, true];

tup[0] = "sup";

// tup[3] = "12345"; //Invalid

let student: [string, number];

student = ["modi", 1234];

// student = [1234, "qwert"]; // Invalid
