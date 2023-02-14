import Blockchain from "./BlockChain";
import Block from "./Block";

let HydraNetwork = new Blockchain();
HydraNetwork.addNewBlock(new Block(1, "02/01/2000", { amount: 5 }));
HydraNetwork.addNewBlock(new Block(2, "03/01/2000", { amount: 15 }));

console.log(JSON.stringify(HydraNetwork, null, 4));
console.log("block chain validation: ", HydraNetwork.isChainValid());

let block1 = HydraNetwork.getChain()[1];
block1.setData({ amount: 10 });
block1.setHash(block1.calculateHash());
console.log(JSON.stringify(HydraNetwork, null, 4));
console.log("block chain validation: ", HydraNetwork.isChainValid());

let block2 = HydraNetwork.getChain()[2];
block2.setPreviousHash(block1.getHash());
block2.setHash(block2.calculateHash());
console.log(JSON.stringify(HydraNetwork, null, 4));
console.log("block chain validation: ", HydraNetwork.isChainValid());
