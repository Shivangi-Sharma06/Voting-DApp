const contractAddress = "0x9393C3AF51f4Ec789830226E75CDcBC6c4bf7Df6";
const contractABI = [
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


/*
let provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY");
let signer = provider.getSigner();
let contract = new ethers.Contract(contractAddress, contractABI, signer);

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            contract = new ethers.Contract(contractAddress, contractABI, signer);

            const address = await signer.getAddress();
            document.getElementById('account').textContent = `Connected: ${address.slice(0, 6)}...${address.slice(-4)}`;
            console.log("Wallet connected:", address);

            const controller = await contract.controller();
            if (address.toLowerCase() === controller.toLowerCase()) {
                document.getElementById('adminPanel').style.display = 'block';
            }

            await updateCandidateList();
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    } else {
        alert("MetaMask not detected! Please install MetaMask.");
    }
}

async function updateCandidateList() {
    const candidateCount = await contract.countcandidate();
    const candidateList = document.getElementById('candidateList');
    candidateList.innerHTML = '';

    for (let i = 0; i < candidateCount; i++) {
        const candidate = await contract.getcandidate(i);
        const li = document.createElement('li');
        li.textContent = `${candidate[1]} - Votes: ${candidate[2]}`;
        candidateList.appendChild(li);
    }
}

document.getElementById('connectButton').addEventListener('click', init);

document.getElementById('voteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const candidateId = document.getElementById('candidateID').value;
    try {
        const tx = await contract.vote(candidateId);
        await tx.wait();
        alert('Vote cast successfully!');
        await updateCandidateList();
    } catch (error) {
        console.error("Error casting vote:", error);
        alert('Error casting vote. Check console for details.');
    }
});

document.getElementById('addCandidateForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const candidateName = document.getElementById('newCandidateName').value;
    try {
        const tx = await contract.addcandidate(candidateName);
        await tx.wait();
        alert('Candidate added successfully!');
        await updateCandidateList();
    } catch (error) {
        console.error("Error adding candidate:", error);
        alert('Error adding candidate. Check console for details.');
    }
});

document.getElementById('removeCandidateForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const candidateId = document.getElementById('removeCandidateId').value;
    try {
        const tx = await contract.removecandidate(candidateId);
        await tx.wait();
        alert('Candidate removed successfully!');
        await updateCandidateList();
    } catch (error) {
        console.error("Error removing candidate:", error);
        alert('Error removing candidate. Check console for details.');
    }
});

init();/*



const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/ttkuxPlTAgFCOGLtwgNdoqi_HivVjAOH");
onst signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer);

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            contract = new ethers.Contract(contractAddress, contractABI, signer);

            const address = await signer.getAddress();
            document.getElementById('account').textContent = `Connected: ${address.slice(0, 6)}...${address.slice(-4)}`;
            console.log("Wallet connected:", address);
            return address;
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    } else {
        alert("MetaMask not detected! Please install MetaMask.");
    }
}

// Call connectWallet when user clicks a button
document.getElementById('connectButton').addEventListener('click', connectWallet);


            const controller = await contract.controller();
            if (address.toLowerCase() === controller.toLowerCase()) {
                document.getElementById('adminPanel').style.display = 'block';
            }

            await updateCandidateList();
        } catch (error) {
            console.error("An error occurred: ", error);
        }
    } else {
        console.log("Please install MetaMask!");
    }
}

async function updateCandidateList() {
    const candidateCount = await contract.countcandidate();
    const candidateList = document.getElementById('candidateList');
    candidateList.innerHTML = '';

    for (let i = 1; i <= candidateCount; i++) {
        const candidate = await contract.getcandidate(i);
        const li = document.createElement('li');
        li.textContent = `${candidate[1]} - Votes: ${candidate[2]}`;
        candidateList.appendChild(li);
    }
}

document.getElementById('voteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const candidateId = document.getElementById('candidateID').value;
    try {
        const tx = await contract.vote(candidateID);
        await tx.wait();
        alert('Vote cast successfully!');
        await updateCandidateList();
    } catch (error) {
        console.error("Error casting vote:", error);
        alert('Error casting vote. Check console for details.');
    }
});

document.getElementById('addCandidateForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const candidateName = document.getElementById('newCandidateName').value;
    try {
        const tx = await contract.addcandidate(candidateName);
        await tx.wait();
        alert('Candidate added successfully!');
        await updateCandidateList();
    } catch (error) {
        console.error("Error adding candidate:", error);
        alert('Error adding candidate. Check console for details.');
    }
});

document.getElementById('removeCandidateForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const candidateId = document.getElementById('removeCandidateId').value;
    try {
        const tx = await contract.removecandidate(candidateId);
        await tx.wait();
        alert('Candidate removed successfully!');
        await updateCandidateList();
    } catch (error) {
        console.error("Error removing candidate:", error);
        alert('Error removing candidate. Check console for details.');
    }
});

init(); 