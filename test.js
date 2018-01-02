const Block = require("./block");
const Blockchain = require("./blockchain")

const newBlockchain = new Blockchain()

let block1 = new Block(1, "previousBlockheader", {coinAmount : 1}, Date())
let block2 = new Block(2, "previousBlockheader", {coinAmount : 2}, Date())

newBlockchain.addBlock(block1)
newBlockchain.addBlock(block2)

// Make sure blockchain is valid
console.log("Is blockchain valid? ", newBlockchain.isChainValid())

// Blockchain is NOT valid once it's been tampered with
newBlockchain.chain[1].transactions = {coinAmount : 5}
console.log("Is blockchain valid after tamper? ", newBlockchain.isChainValid())