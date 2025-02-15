import { ethers } from "ethers";

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


let provider;
let signer;
let contract;

const connectButton = document.getElementById("connectButton");
const accountEl = document.getElementById("account");
const connectionStatus = document.getElementById("connectionStatus");
const controllerActions = document.getElementById("controllerActions");
const addCandidateBtn = document.getElementById("addCandidateBtn");
const removeCandidateBtn = document.getElementById("removeCandidateBtn");
const voteBtn = document.getElementById("voteBtn");

async function connect() {

		
		if (typeof window.ethereum !== 'undefined') {
		try {
			const accounts=await window.ethereum.request({ method: 'eth_requestAccounts' });
			provider = new ethers.providers.Web3Provider(window.ethereum);
			signer = provider.getSigner();

			const account = accounts[0]; //pehla acc hi connect kardo
			accountEl.innerHTML = account;
			connectionStatus.innerHTML = "Connected";

			contract = new ethers.Contract(contractAddress, contractABI, signer);

			//js se hi inner html se ui m chnage kar diya
			connectButton.innerHTML = "Connected";
			connectButton.disabled = true;
			await updateCandidateList();


			// check ki controller kaun hai
			const controller = await contract.controller();
			controllerActions.style.display =
				controller.toLowerCase() === account.toLowerCase() ? "block" : "none";

		} catch (error) {
			console.error("Connection error:", error);
			connectionStatus.innerHTML = `Error: ${error.message}`;
		}
	}
}

connectButton.addEventListener("click", connect);
addCandidateBtn.addEventListener("click", addCandidate);
removeCandidateBtn.addEventListener("click", removeCandidate);
voteBtn.addEventListener("click", vote);


// agar acc change ho jaye to reload karega
function handleAccountsChanged(accounts) {
	if (accounts.length === 0) {
		//ye tab bhi hoga jab metmask locked ho
		accountEl.innerHTML = "Not connected";
		connectionStatus.innerHTML = "Please connect to MetaMask";
		connectButton.disabled = false;
		connectButton.innerHTML = "Connect Wallet";
		controllerActions.style.display = "none";
	} else {
		//ye tab hoga jab account change ho toh reload command h ye
		window.location.reload();
	}
}

// candidate list update karega jab tum add karoge
async function updateCandidateList() {
	if (!contract) return;
	const candidatesList = document.getElementById("candidates");
	candidatesList.innerHTML = "";
	try {
		const count = await contract.countcandidate();
		for (let i = 1; i <= count; i++) {
			const candidate = await contract.getcandidate(i);
			const li = document.createElement("li");
			li.innerHTML = `ID: ${candidate[0]} - Name: ${candidate[1]} - Votes: ${candidate[2]}`;
			candidatesList.appendChild(li);
		}
	} catch (error) {
		console.error("Error updating candidate list:", error);
	}
}

// candidate add karega
async function addCandidate() {
	const name = document.getElementById("candidateName").value;
	try {
		const tx = await contract.addcandidate(name);
		await tx.wait();
		updateCandidateList();
	} catch (error) {
		console.error("Error adding candidate:", error);
	}
}

//vote function ka logic implement kiya
async function vote() {
	const candidateId = document.getElementById("candidateIdToVote").value;
	try {
		const tx = await contract.vote(candidateId);
		await tx.wait();
		updateCandidateList();
	} catch (error) {
		console.error("Error voting:", error);
	}
}

//candidate remove kardega
async function removeCandidate() {
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
};

