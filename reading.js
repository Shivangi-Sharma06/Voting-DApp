import { ethers } from "ethers";

// Replace YOUR_ALCHEMY_API_KEY with the actual API key you copied
const ALCHEMY_API_KEY = "ttkuxPlTAgFCOGLtwgNdoqi_HivVjAOH";
const NETWORK = "sepolia"; // Change to "goerli" if using the testnet

// Connect to Alchemy using Ethers.js
const provider = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/ttkuxPlTAgFCOGLtwgNdoqi_HivVjAOH`);

async function main() {
  const blockNumber = await provider.getBlockNumber();
  console.log("Latest Block Number:", blockNumber);
}


main();
