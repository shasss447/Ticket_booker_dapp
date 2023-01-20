import React,{useState} from 'react';
import Popup from 'reactjs-popup';
import {ethers} from 'ethers';
import './PaymentButton.css'


function PaymentButton()
 {
  const paymentHandler=async()=>{
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it or connect wallet.");
  
      await window.ethereum.request({
        method: "eth_requestAccounts",
    });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
      const tx = await signer.sendTransaction({
        to: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        value: ethers.utils.parseEther("0.02")
      });
      console.log(tx);
    } catch (err) {
      console.log(err);
    }
  };
 return (
  <div>
  <Popup  trigger={<button className='paybutt'>Pay</button>} modal>
    {
    close =>
     (
        <div className='popup'>
          <p>You are about to do the payment to:</p>
          <h6>address:</h6>
          <h6>amount:</h6>
        <button onClick={paymentHandler}className='popbutt'>OK</button> 
        <button onClick={() => {close();}}className='popbutt'>CLOSE</button>      
        </div>
     )
    }
  </Popup>
</div>
  )
}

export default PaymentButton