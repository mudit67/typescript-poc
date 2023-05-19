class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number // access modifiers are required
  ) {}
  format() {
    return `${this.client} owes ₹${this.amount} for ${this.details}`;
  }
}

export default Invoice;
