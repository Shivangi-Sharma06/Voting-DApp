const { Wallet } = require("ethers");

const mnemonic = "token...your key to convert";
const wallet = Wallet.fromPhrase(mnemonic);

console.log("Private Key:", wallet.privateKey);
