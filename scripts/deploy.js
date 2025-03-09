const hre = require("hardhat");

async function main() {
    // Replace "YourContractName" with the actual name of your contract
    const Contract = await hre.ethers.getContractFactory("Elections"); 

    console.log("Deploying contract...");

    // Deploy the contract
    const contract = await Contract.deploy(); 

    await contract.waitForDeployment(); // Wait for deployment

    console.log("Contract deployed to:", contract.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
