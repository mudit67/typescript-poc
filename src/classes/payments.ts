import { hasFormatter } from "./../interfaces/hasFormatter.js";

export class Payment implements hasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number // access modifiers are required
  ) {}
  format() {
    return `${this.recipient} is owed ₹${this.amount} for ${this.details}`;
  }
}