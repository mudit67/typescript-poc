import Invoice from "./classes/invoice.js";
import ListTemplate from "./classes/listTemplate.js";
import { Payment } from "./classes/payments.js";
// let docOne: hasFormatter;
// let docTwo: hasFormatter;
// docOne = new Invoice("krish", "website", 1000);
// docTwo = new Payment("darm", "lorem", 1234);
let docs = [];
// docs.push(docOne);
// docs.push(docTwo);
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
const form = document.querySelector("form.new-item-form");
// input fields
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value == "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    const ul = document.querySelector("ul");
    const list = new ListTemplate(ul);
    list.render(doc, type.value, "end");
    console.log(doc);
});
// Generics
const addUID = (obj) => {
    let Uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { Uid });
};
const docOne = addUID({ name: "modi", age: 47 });
// const docTwo = addUID({ skills: "codings", desig: "manager" }); //Invalid as doesn't have the name attribute/ key-value pair
console.log(docOne);
const docThree = {
    uid: 1234,
    resourceName: "me",
    data: "qwerty",
    // data: {name:"qwerty"},
};
const docFour = {
    uid: 123,
    resourceName: "asf",
    data: ["sup"],
};
console.log(docThree, docFour);
