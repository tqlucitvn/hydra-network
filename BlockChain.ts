import Block from "./Block";

class Blockchain {
  private chain: Block[];
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  public createGenesisBlock(): Block {
    return new Block(
      0,
      "01/01/2000",
      {
        creator: "Sean",
        birthDay: "01/01/2000",
      },
      "0"
    );
  }

  public getLatestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  public addNewBlock(newBlock: Block): void {
    newBlock.setPreviousHash(this.getLatestBlock().getHash());
    newBlock.setHash(newBlock.calculateHash());
    this.chain.push(newBlock);
  }
}

export default Blockchain;
