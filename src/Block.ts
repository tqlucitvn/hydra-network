import { SHA256 } from "crypto-js";
import Transaction from "./Transaction";

class Block {
  private timestamp: string;
  private previousHash: string;
  private hash: string;
  private nonce: number;
  private transactionList: Transaction[];

  constructor(
    timestamp: string,
    transactionList: Transaction[],
    previousHash: string = ""
  ) {
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
    this.transactionList = transactionList;
  }

  public mineBlock(diff: number): void {
    while (this.hash.substring(0, diff) !== Array(diff + 1).join("0")) {
      const newHash = this.calculateHash();
      this.nonce++;
      this.hash = newHash;
    }

    console.log(
      `block mined with nonce = ${this.nonce}, hash is: ${this.hash}`
    );
  }

  public getTransactionList(): Transaction[] {
    return this.transactionList;
  }

  public setTransactionList(transactionList: Transaction[]): void {
    this.transactionList = transactionList;
  }

  public getNonce(): number {
    return this.nonce;
  }

  public setNonce(nonce: number): void {
    this.nonce = nonce;
  }

  public getPreviousHash(): string {
    return this.previousHash;
  }
  public setPreviousHash(hash: string) {
    this.previousHash = hash;
  }

  public getHash(): string {
    return this.hash;
  }

  public setHash(hash: string) {
    this.hash = hash;
  }

  public calculateHash(): string {
    return SHA256(
      this.timestamp + this.transactionList + this.previousHash + this.nonce
    ).toString();
  }
}

export default Block;
