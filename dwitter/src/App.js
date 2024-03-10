// src/App.js

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import "./App.css";
import RegisterModal from "./Registration/RegisterModal";
import abi from "./contract/Dwitter.json";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  // console.log(state);
  return (
    <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
      {/* <img src={Dwitter}  alt=".." width="100%" height="400px"/>
      <p
        class="text-muted lead "
        style={{ marginTop: "10px", marginLeft: "5px" }}
      >
        <small>Connected Account - {account}</small>
      </p> */}
      <div className="container">
        <RegisterModal state={state}/>
        {/* <FacebookUI state={state}/> */}
      </div>
    </div>
  );
}

export default App;
// import {
//   Button,
//   Container,
//   Modal,
//   Paper,
//   Typography
// } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import Web3 from 'web3'; // Import web3 library
// import abi from "./contract/Dwitter.json";

// // Dwitter smart contract ABI and address
// const dwitterContractABI = abi.abi; // Replace with your Dwitter contract ABI
// const dwitterContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your Dwitter contract address

// const RegistrationForm = ({ onRegister, onClose, web3, accounts, contract }) => {
//   const [username, setUsername] = useState('');
//   const [name, setName] = useState('');
//   const [imgHash, setImgHash] = useState('');
//   const [coverHash, setCoverHash] = useState('');
//   const [bio, setBio] = useState('');

//   const handleRegister = async () => {
//     try {
//       // Call the Dwitter smart contract's registerUser function
//       await contract.methods.registerUser(username, name, imgHash, coverHash, bio).send({ from: accounts[0] });
//       onRegister(username, name, imgHash, coverHash, bio);
//       onClose(); // Close the modal after registration
//     } catch (error) {
//       console.error('Error registering user:', error);
//     }
//   };

//   return (
//     <Paper sx={{ p: 3 }}>
//       <Typography variant="h5" gutterBottom>
//         Registration Form
//       </Typography>
//       {/* Form fields go here */}
//       {/* ... */}
//       <Button variant="contained" color="primary" onClick={handleRegister}>
//         Register
//       </Button>
//     </Paper>
//   );
// };

// // ... (other components remain unchanged)

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
//   const [web3, setWeb3] = useState(null);
//   const [accounts, setAccounts] = useState([]);
//   const [contract, setContract] = useState(null);

//   useEffect(() => {
//     const initWeb3 = async () => {
//       if (window.ethereum) {
//         try {
//           // Request account access if needed
//           await window.ethereum.request({ method: 'eth_requestAccounts' });
//           const web3Instance = new Web3(window.ethereum);
//           const accounts = await web3Instance.eth.getAccounts();
//           const dwitterContract = new web3Instance.eth.Contract(dwitterContractABI, dwitterContractAddress);

//           setWeb3(web3Instance);
//           setAccounts(accounts);
//           setContract(dwitterContract);
//         } catch (error) {
//           console.error('Error initializing web3:', error);
//         }
//       }
//     };

//     initWeb3();
//   }, []);

//   // ... (other functions remain unchanged)

//   return (
//     <Container sx={{ mt: 5 }}>
//       {/* ... (other components remain unchanged) */}
//       <Modal open={isRegistrationModalOpen} onClose={closeRegistrationModal}>
//         <Container sx={{ mt: 5 }}>
//           <RegistrationForm
//             onRegister={handleRegister}
//             onClose={closeRegistrationModal}
//             web3={web3}
//             accounts={accounts}
//             contract={contract}
//           />
//         </Container>
//       </Modal>
//     </Container>
//   );
// };

// export default App;

