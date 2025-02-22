
const contractAddress = "0x1d5372d0A5428E57f7E686Ed792770d01af241AB";
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
    "inputs": [],
    "name": "getController",
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

async function connect() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log("Provider initialized:", provider);

      signer = provider.getSigner();
      console.log("Signer set to:", signer);

      account = accounts[0]; // Set the account variable
      console.log("Connected account:", account);
      userAddress = account;
      //accountEl.innerHTML = account;
      connectionStatus.innerHTML = "Connected";

      contract = new ethers.Contract(contractAddress, contractABI, signer);
      console.log("Contract Initialized:", contract);

      document.getElementById("connectionStatus").innerHTML = "Connected";
      document.getElementById("connectWallet").innerHTML = "Connected";
      document.getElementById("connectWallet").disabled = true;

      await checkControllerStatus();
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
  else {
    alert("Please install MetaMask first");
  }
}

// Ensure global availability of connect()
window.connect = connect;

// Move DOM element selections to the top
const connectButton = document.getElementById("connectWallet");
const accountEl = document.getElementById("account");
const connectionStatus = document.getElementById("connectionStatus");
const controllerActions = document.getElementById("controllerActions");
const addCandidateBtn = document.getElementById("addCandidateBtn");
const removeCandidateBtn = document.getElementById("removeCandidateBtn");
const changeControllerBtn = document.getElementById("changeControllerBtn");
const voteBtn = document.getElementById("voteBtn");
if (connectButton) {
  connectButton.addEventListener("click", connect);
} else {
  console.error("❌ connectWallet button not found in DOM!");
}

if (!connectionStatus) {
  console.error("❌ connectionStatus element not found in DOM!");
};


// Ensure event listeners are added only after DOM is loaded
window.onload = function () {
  connectButton.addEventListener("click", connect);
  addCandidateBtn.addEventListener("click", addCandidate);
  removeCandidateBtn.addEventListener("click", removeCandidate);
  changeControllerBtn.addEventListener("click", changeController);
  voteBtn.addEventListener("click", vote);
};


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

    if (!contract) {
      console.error("Contract initialization failed!");
    } else {
      console.log("Contract successfully reinitialized.");
    }

    await updateControllerStatus(); // Refresh UI with new account info
  }
}


async function checkControllerStatus() {
  try {
    // 🔹 Ensure contract is initialized
    if (!contract) {
      console.error("Contract is not initialized!");
      connectionStatus.innerHTML = "Contract not initialized!";
      return;
    }

    // 🔹 Ensure contract has getController function
    if (typeof contract.getController !== "function") {
      console.error("getController function does not exist on contract!");
      connectionStatus.innerHTML = "Contract function missing!";
      return;
    }

    // 🔹 Fetch Controller Address
    const controller = await contract.getController();
    console.log("Contract Controller Address:", controller);

    // 🔹 Ensure account is defined
    if (!account) {
      console.error("No account connected!");
      connectionStatus.innerHTML = "No account connected!";
      return;
    }

    console.log("Connected Account:", account);

    // 🔹 Check if the connected account is the controller
    const isController = controller.toLowerCase() === account.toLowerCase();
    console.log("Is Connected Account the Controller?", isController);

    // 🔹 Enable/Disable Buttons Based on Controller Status
    addCandidateBtn.disabled = !isController;
    removeCandidateBtn.disabled = !isController;
    changeControllerBtn.disabled = !isController;

    // 🔹 Update UI Text
    connectionStatus.innerHTML = `Connected ${isController ? '(Controller)' : '(Voter)'}`;

  } catch (error) {
    console.error("Error checking controller status:", error);
    connectionStatus.innerHTML = "Error checking controller status!";
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
  if (!contract) {
    alert("Please connect your wallet first!");
    return;
  }
  const name = document.getElementById("candidateName").value;
  if (!name) {
    alert("Please enter a candidate name!");
    return;
  }
  try {
    const tx = await contract.addcandidate(candidateName);
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

  if (!ethers.utils.isAddress(newControllerAddress)) {
    alert("Invalid Ethereum address!");
    return;
  }
  try {
    console.log("Changing controller to:", newControllerAddress);
    const tx = await contract.changeowner(newControllerAddress);
    await tx.wait(); // Wait for transaction confirmation

    console.log("Controller changed successfully!");
    alert("Controller changed successfully!");

    // Fetch the latest controller address and update UI
    await updateControllerStatus();
  } catch (error) {
    console.error("Error changing controller:", error);
    alert("Error changing controller. Check console for details.");
  }
}

// ye func controller staus update karega
async function updateControllerStatus() {
  try {
    const controller = await contract.getController(); // Fetch latest controller
    console.log("Updated Controller Address:", controller);

    if (!controller) {
      console.error("Controller address fetch failed!");
      return;
    }

    const isController = controller.toLowerCase() === account.toLowerCase();
    console.log("Is Connected Account the Controller?", isController);

    // Update UI
    document.getElementById("controllerStatus").innerHTML =
      `Connected ${isController ? '(Controller)' : '(Voter)'}`;

    document.getElementById("controllerAddress").innerText = `Controller Address: ${controller}`;

    // Enable/Disable buttons based on role
    addCandidateBtn.disabled = !isController;
    removeCandidateBtn.disabled = !isController;
    changeControllerBtn.disabled = !isController;

    console.log("Updated UI: Controller Address & Buttons");
  } catch (error) {
    console.error("Error updating controller status:", error);
  }
}


async function fetchController() {
  try {
    if (!contract) {
      console.error("Contract is not initialized!");
      return;
    }

    if (!contract.getController) {  // Check if function exists
      console.error("getController function does not exist on contract!");
      return;
    }

    const controller = await contract.getController();
    console.log("Controller Address:", controller);
  } catch (error) {
    console.error("Error fetching controller:", error);
  }
}

// ye existing wale ke liye events h
window.ethereum.on('accountsChanged', handleAccountsChanged);
window.ethereum.on('chainChanged', () => window.location.reload());



