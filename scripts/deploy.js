const hre = require("hardhat");

async function main() {
    // Replace "YourContractName" with the actual name of your contract
    const Contract = await hre.ethers.getContractFactory("code"); 

    console.log("Deploying contract...");

    // Deploy the contract
    const contract = await Contract.deploy(); 

    await contract.deployed(); // Wait for deployment

    console.log("Contract deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
