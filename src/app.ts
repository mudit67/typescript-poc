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

// Enums

enum ResourceType {
  Book,
  Person,
  Flash_Drive,
  Movie,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 12,
  resourceType: ResourceType.Book,
  data: { title: "the power of the sun" },
};
const docTwo: Resource<object> = {
  uid: 345,
  resourceType: ResourceType.Flash_Drive,
  data: { name: "in the palm of my hand" },
};

console.log(docOne, docTwo);
