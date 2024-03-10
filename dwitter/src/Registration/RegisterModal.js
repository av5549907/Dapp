import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './RegisterModal.css';

const RegisterModal = (state) => {
    const {contract}=state;
    const [processing, setProcessing] = useState(false);
    const handleRegistration = async (event) => {

      try{
      event.preventDefault();
      const uname = document.querySelector("#username").value;
      const name = document.querySelector("#name").value;
      const profileImg = document.querySelector("#profileImg").value;
      const coverImg = document.querySelector("#coverImg").value;
      const bio = document.querySelector("#bio").value;
      console.log(uname,name, profileImg,coverImg, bio, contract);
      // const amount = { value: ethers.utils.parseEther("0.00001") };
     // const transaction = await contract.buyChai(name, message, amount);
      const isUserPresent=await contract.usernameAvailable(uname);
      if(!isUserPresent){
        alert("Registarion Started ........")
       const registration= await contract.registerUser(uname,name,profileImg,coverImg,bio);
       await registration.wait();
       console.log("Registration Complete");
      }else{
        console.log("Error in Registration");
      }
    }catch(Error){
        console.log(Error);
    }
      //console.log("Transaction is done");
    };
  return (
    <>
    <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
      <form onSubmit={handleRegistration}>
      <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter Your User Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Profile Image</label>
          <input
            type="file"
            className="form-control"
            id="profileImg"
            placeholder="Enter Your Message"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cover Image</label>
          <input
            type="file"
            className="form-control"
            id="coverImg"
            placeholder="Enter Your Message"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Bio</label>
          <input
            type="text"
            className="form-control"
            id="bio"
            placeholder="Enter About You"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!state.contract}
        >
          Register
        </button>
      </form>
    </div>
  </>
  );
};

export default RegisterModal;
