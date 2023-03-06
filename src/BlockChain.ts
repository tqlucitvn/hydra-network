import Block from "./Block";
import Transaction from "./Transaction";

class Blockchain {
  private chain: Block[];
  private diff: number;
  private pendingTransactionList: Transaction[];
  private blockReward: number;

  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.diff = 3;
    this.pendingTransactionList = [];
    this.blockReward = 100;
  }

  public createGenesisBlock(): Block {
    return new Block("01/01/2000", [], "0");
  }

  public getLatestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  public getChain(): Block[] {
    return this.chain;
  }

  public minePendingTransactionList(minerRewardAddress: string): void {
    let newBlock = new Block(
      new Date().toISOString(),
      this.pendingTransactionList
    );
    newBlock.mineBlock(this.diff);

    console.log(
      `New block was successfully mined with nonce: ${newBlock.getNonce()} | hash: ${newBlock.getHash()}`
    );

    this.chain.push(newBlock);

    // now reset the transaction list and give miner his reward
    this.pendingTransactionList = [
      new Transaction("reward_pool", minerRewardAddress, this.blockReward),
    ];
  }

  public getPendingTransactionList(): Transaction[] {
    return this.pendingTransactionList;
  }

  public addTransaction(transaction: Transaction): void {
    this.pendingTransactionList.push(transaction);
  }

  public getBalanceOf(address: string): number {
    let currentBalance: number = 0;
    this.chain.forEach((block) =>
      block.getTransactionList().forEach((tran) => {
        if (tran.getFromAddress() === address)
          currentBalance -= tran.getAmount();

        if (tran.getToAddress() === address) currentBalance += tran.getAmount();
      })
    );

    return currentBalance;
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
