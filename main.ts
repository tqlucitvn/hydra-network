import Blockchain from "./BlockChain";
import Block from "./Block";

let HydraNetwork = new Blockchain();
HydraNetwork.addNewBlock(new Block(1, "02/01/2000", { amount: 5 }));
HydraNetwork.addNewBlock(new Block(2, "03/01/2000", { amount: 15 }));

console.log(JSON.stringify(HydraNetwork, null, 4));
