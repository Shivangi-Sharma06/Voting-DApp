const { Wallet } = require("ethers");

const mnemonic = "token....razor";
const wallet = Wallet.fromPhrase(mnemonic);

console.log("Private Key:", wallet.privateKey);


// //check karega ki acc jo connect kiya h wo controller h ya nahi
// const controller = await contract.controller();
// const isController = controller.toLowerCase() === account.toLowerCase();
// console.log("Contract Controller Address:", controller);
// console.log("Connected Account:", account);

// // ye button disable karega agar controller nahi h pehle ki tarh hide nhi
// addCandidateBtn.disabled = !isController;
// removeCandidateBtn.disabled = !isController;
// changeControllerBtn.disabled = !isController;

// // ye non controller ko batayega ki tu nahi
// if (!isController) {
//     addCandidateBtn.title = "Only the controller can add candidates";
//     removeCandidateBtn.title = "Only the controller can remove candidates";
//     changeControllerBtn.title = "Only the controller can change the controller";
// }

// connectButton.innerHTML = "Connected";
// connectButton.disabled = true;

// connectButton.addEventListener("click", connect);
// addCandidateBtn.addEventListener("click", addCandidate);
// removeCandidateBtn.addEventListener("click", removeCandidate);
// voteBtn.addEventListener("click", vote);

// await updateCandidateList();

// if (window.ethereum) {
//     window.ethereum.on("accountsChanged", handleAccountsChanged);
// }


// // controller h kon ye batata h
// connectionStatus.innerHTML = `Connected ${isController ? '(Controller)' : '(Voter)'}`;

// } catch (error) {
// console.error("Connection error:", error);
// connectionStatus.innerHTML = `Error: ${error.message}`;
// }
// }



// // agar acc change ho jaye to reload karega
// async function handleAccountsChanged(accounts) {
// if (accounts.length === 0) {
// //ye tab bhi hoga jab metmask locked ho
// accountEl.innerHTML = "Not connected";
// connectionStatus.innerHTML = "Please connect to MetaMask";
// connectButton.disabled = false;
// connectButton.innerHTML = "Connect Wallet";

// addCandidateBtn.disabled = true;
// removeCandidateBtn.disabled = true;
// changeControllerBtn.disabled = true;

// } else {
// account = accounts[0]; // Update active account
// console.log("Switched Account:", account);
// await checkControllerStatus(); // Refresh controller permissions
// }
// }

// async function checkControllerStatus() {
// const controller = await contract.controller();
// console.log("New Controller Address:", controller);
// console.log("New Connected Account:", account);

// const isController = controller.toLowerCase() === account.toLowerCase();
// console.log("Is Switched Account the Controller?", isController);

// addCandidateBtn.disabled = !isController;
// removeCandidateBtn.disabled = !isController;
// changeControllerBtn.disabled = !isController;

// connectionStatus.innerHTML = `Connected ${isController ? '(Controller)' : '(Voter)'}`;
// }
// }
