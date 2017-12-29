const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, timestamp, previousHash = '', data) {
    this.index        = index;
    this.timestamp    = timestamp;
    this.previousHash = previousHash;
    this.hash         = this.calculateHash();
    this.data         = data;
  }

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

module.exports = Block;
