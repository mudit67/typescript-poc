export class Payment {
    constructor(recipient, details, amount // access modifiers are required
    ) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ₹${this.amount} for ${this.details}`;
    }
}
