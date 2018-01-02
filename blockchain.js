const Block = require('./block')

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
  }

  createGenesisBlock() {
    return new Block(0, "This Is The Genesis Block", {coinAmount : 10}, Date())
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(newBlock) {
    newBlock.previousBlockHeader = this.getLastBlock().header
    newBlock.header              = newBlock.calculateHash()
    this.chain.push(newBlock)
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      let currentBlock  = this.chain[i]
      let previousBlock = this.chain[i - 1]

      if(currentBlock.header !== currentBlock.calculateHash()) {
        return false
      }

      if(currentBlock.previousBlockHeader !== previousBlock.header) {
        return false
      }
    }
    return true
  }
}

module.exports = Blockchain