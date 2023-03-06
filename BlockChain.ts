import Block from "./Block";

class Blockchain {
  private chain: Block[];
  private diff: number;
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.diff = 4;
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

  public getChain(): Block[] {
    return this.chain;
  }

  public addNewBlock(newBlock: Block): void {
    newBlock.setPreviousHash(this.getLatestBlock().getHash());
    newBlock.mineBlock(this.diff);
    this.chain.push(newBlock);
  }

  public isChainValid(): boolean {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.getHash() !== currentBlock.calculateHash()) return false;

      if (currentBlock.getPreviousHash() !== previousBlock.getHash())
        return false;
    }

    return true;
  }
}

export default Blockchain;
