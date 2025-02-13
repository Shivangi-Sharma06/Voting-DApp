const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/ttkuxPlTAgFCOGLtwgNdoqi_HivVjAOH");
console.log("Provider initialized:", provider);

const walletAddress = "0x9393C3AF51f4Ec789830226E75CDcBC6c4bf7Df6";
const walletAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "candidateID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "candidateadded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "candidateID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "candidateremoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "oldcontroller",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newcontroller",
				"type": "address"
			}
		],
		"name": "controllerchanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "candidateID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			}
		],
		"name": "voted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_candidatename",
				"type": "string"
			}
		],
		"name": "addcandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "votecount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newcontroller",
				"type": "address"
			}
		],
		"name": "changeowner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "controller",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "countcandidate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateID",
				"type": "uint256"
			}
		],
		"name": "countvotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateID",
				"type": "uint256"
			}
		],
		"name": "getcandidate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_voter",
				"type": "address"
			}
		],
		"name": "hasvoted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateID",
				"type": "uint256"
			}
		],
		"name": "removecandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateID",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "Voted_For_ID",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "HasVoted",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const main = async () => {
    try {
        // Create contract instance
        const walletContract = new ethers.Contract(walletAddress, walletAbi, provider);
        
        // Example function calls
        const candidateID = 1; // Example candidate ID
        const voterAddress = "0x1234567890123456789012345678901234567890"; // Example voter address

        // Get candidate details
        const candidate = await walletContract.getcandidate(candidateID);
        console.log(`Candidate ${candidateID}:`);
        console.log(`ID: ${candidate[0]}`);
        console.log(`Name: ${candidate[1]}`);
        console.log(`Vote Count: ${candidate[2]}`);

        // Get vote count
        const votes = await walletContract.countvotes(candidateID);
        console.log(`Candidate ${candidateID} has ${votes} votes`);

        // Check if address has voted
        const voted = await walletContract.hasvoted(voterAddress);
        console.log(`Address ${voterAddress} has ${voted ? 'voted' : 'not voted'}`);

        // Get controller
        const controllerAddress = await walletContract.controller();
        console.log(`The current controller is: ${controllerAddress}`);

    } catch (error) {
        console.error("Error in contract interaction:", error);
    }
};

// Execute the main function
main().catch((error) => {
    console.error("Unhandled error:", error);
    process.exit(1);
});