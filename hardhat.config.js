require("dotenv").config(); // Load environment variables
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.0",
    paths: {
      sources: "./contracts",
    },
    networks: {
        sepolia: {
            url: process.env.SEPOLIA_RPC_URL || "",
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
        },
    },
};