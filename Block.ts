import { SHA256 } from "crypto-js";

class Block {
  private index: number;
  private timestamp: string;
  private data: any;
  private previousHash: string;
  private hash: string;
  private nonce: number;

  constructor(
    index: number,
    timestamp: string,
    data: any,
    previousHash: string = ""
  ) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
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

  public getData(): any {
    return this.data;
  }

  public setData(data: any): void {
    this.data = data;
  }

  public calculateHash(): string {
    return SHA256(
      this.index +
        this.timestamp +
        JSON.stringify(this.data) +
        this.previousHash +
        this.nonce
    ).toString();
  }
}

export default Block;
