class Transaction {
  private fromAddress: string;
  private toAddress: string;
  private amount: number;

  constructor(fromAddress: string, toAddress: string, amount: number) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }

  public getFromAddress(): string {
    return this.fromAddress;
  }

  public setFromAddress(fromAddress: string): void {
    this.fromAddress = fromAddress;
  }

  public getToAddress(): string {
    return this.toAddress;
  }

  public setToAddress(toAddress: string): void {
    this.toAddress = toAddress;
  }

  public getAmount(): number {
    return this.amount;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }
}

export default Transaction;
