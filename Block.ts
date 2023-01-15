import { SHA256 } from "crypto-js";

class Block {
  private index: number;
  private timestamp: string;
  private data: any;
  private previousHash: string;
  private hash: string;

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
      this.index +
        this.timestamp +
        JSON.stringify(this.data) +
        this.previousHash
    ).toString();
  }
}

export default Block;
