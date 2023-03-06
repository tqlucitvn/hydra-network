import Blockchain from "./BlockChain";
import Block from "./Block";
import Transaction from "./Transaction";

let HydraNetwork = new Blockchain();

HydraNetwork.addTransaction(new Transaction("address1", "address2", 100));
HydraNetwork.addTransaction(new Transaction("address2", "address3", 100));
HydraNetwork.addTransaction(new Transaction("address3", "address1", 50));
HydraNetwork.addTransaction(new Transaction("address3", "address2", 50));

HydraNetwork.minePendingTransactionList("address4");

// HydraNetwork.minePendingTransactionList("address4");

// TransactionList now should contain only Reward Sending Transaction for miner
console.log(
  "Current TransactionList: ",
  HydraNetwork.getPendingTransactionList()
);

console.log("Address current balance: ", HydraNetwork.getBalanceOf("address1"));
console.log("Address current balance: ", HydraNetwork.getBalanceOf("address2"));
console.log("Address current balance: ", HydraNetwork.getBalanceOf("address3"));
console.log("Address current balance: ", HydraNetwork.getBalanceOf("address4"));

HydraNetwork.minePendingTransactionList("address3");

// Minter that found latest block now should recieved his reward
console.log("Address current balance: ", HydraNetwork.getBalanceOf("address1"));
console.log("Address current balance: ", HydraNetwork.getBalanceOf("address2"));
console.log("Address current balance: ", HydraNetwork.getBalanceOf("address3"));
console.log("Address current balance: ", HydraNetwork.getBalanceOf("address4"));
