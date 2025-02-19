import { ethers } from "ethers";

const contractAddress =" 0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractABI =  [
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
let userAddress;
let account;

// const connectButton = document.getElementById("connectWallet");
// const accountEl = document.getElementById("account");
// const connectionStatus = document.getElementById("connectionStatus");
// const controllerActions = document.getElementById("controllerActions");
// const addCandidateBtn = document.getElementById("addCandidateBtn");
// const removeCandidateBtn = document.getElementById("removeCandidateBtn");
// const changeControllerBtn = document.getElementById("changeControllerBtn");
// const voteBtn = document.getElementById("voteBtn");

async function connect() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();

            account = accounts[0]; // Set the account variable
            userAddress = account;
            accountEl.innerHTML = account;
            connectionStatus.innerHTML = "Connected";

            contract = new ethers.Contract(contractAddress, contractABI, signer);
            console.log("Contract Initialized:", contract);

            await checkControllerStatus(); // Check if this account is controller

            connectButton.innerHTML = "Connected";
            connectButton.disabled = true;

            await updateCandidateList();

            // Listen for account changes
            if (window.ethereum) {
                window.ethereum.on("accountsChanged", handleAccountsChanged);
            }
        } catch (error) {
            console.error("Connection error:", error);
            connectionStatus.innerHTML = `Error: ${error.message}`;
        }
    }
}

//ye event listeners h jo connect function k bahar h
connectButton.addEventListener("click", connect);
addCandidateBtn.addEventListener("click", addCandidate);
removeCandidateBtn.addEventListener("click", removeCandidate);
changeControllerBtn.addEventListener("click", changeController); 
voteBtn.addEventListener("click", vote);

async function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        accountEl.innerHTML = "Not connected";
        connectionStatus.innerHTML = "Please connect to MetaMask";
        connectButton.disabled = false;
        connectButton.innerHTML = "Connect Wallet";

        addCandidateBtn.disabled = true;
        removeCandidateBtn.disabled = true;
        changeControllerBtn.disabled = true;
    } else {
        account = accounts[0]; // Update active account
        console.log("Switched Account:", account);

        // Update signer and contract instance
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        await checkControllerStatus(); // Refresh controller permissions
    }
}

async function checkControllerStatus() {
    try {
        const controller = await contract.controller();
        console.log("Contract Controller Address:", controller);
        console.log("Connected Account:", account);

        const isController = controller.toLowerCase() === account.toLowerCase();
        console.log("Is Connected Account the Controller?", isController);

        addCandidateBtn.disabled = !isController;
        removeCandidateBtn.disabled = !isController;
        changeControllerBtn.disabled = !isController;

        console.log("Add Candidate Button Disabled:", addCandidateBtn.disabled);
        console.log("Remove Candidate Button Disabled:", removeCandidateBtn.disabled);
        console.log("Change Controller Button Disabled:", changeControllerBtn.disabled);

        if (!isController) {
            addCandidateBtn.title = "Only the controller can add candidates";
            removeCandidateBtn.title = "Only the controller can remove candidates";
            changeControllerBtn.title = "Only the controller can change the controller";
        } else {
            addCandidateBtn.title = "";
            removeCandidateBtn.title = "";
            changeControllerBtn.title = "";
        }

        connectionStatus.innerHTML = `Connected ${isController ? '(Controller)' : '(Voter)'}`;
    } catch (error) {
        console.error("Error checking controller status:", error);
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
  if(!contract){
    alert("Please connect your wallet first!");
    return;
  }
	const name = document.getElementById("candidateName").value;
  if(!name){
    alert("Please enter a candidate name!");
    return;
  }
	try {
		const tx = await contract.addcandidate(name);
		await tx.wait();
    document.getElementById("candidateName").value = ""; 
		await updateCandidateList();
    alert("Candidate added succesfully!");
	} catch (error) {
		console.error("Error adding candidate:", error);
    alert("Failed to load the candidate!");
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
}

// ye function controller change wala scene dekhega
async function changeController() {
    const newControllerAddress = document.getElementById('newControllerAddress').value;
    try {
        const tx = await contract.changeowner(newControllerAddress);
        await tx.wait();
        alert('Controller changed successfully!');
        await updateControllerStatus();
    } catch (error) {
        console.error("Error changing controller:", error);
        alert('Error changing controller. Check console for details.');
    }
}

// ye func controller staus update karega
async function updateControllerStatus() {
    const controller = await contract.controller();
    controllerActions.style.display =
        controller.toLowerCase() === userAddress.toLowerCase() ? "block" : "none";
}


// ye existing wale ke liye events h
window.ethereum.on('accountsChanged', handleAccountsChanged);
window.ethereum.on('chainChanged', () => window.location.reload());



