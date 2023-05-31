import Invoice from "./classes/invoice.js";
import ListTemplate from "./classes/listTemplate.js";
import { Payment } from "./classes/payments.js";
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
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Person"] = 1] = "Person";
    ResourceType[ResourceType["Flash_Drive"] = 2] = "Flash_Drive";
    ResourceType[ResourceType["Movie"] = 3] = "Movie";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 12,
    resourceType: ResourceType.Book,
    data: { title: "the power of the sun" },
};
const docTwo = {
    uid: 345,
    resourceType: ResourceType.Flash_Drive,
    data: { name: "in the palm of my hand" },
};
console.log(docOne, docTwo);
