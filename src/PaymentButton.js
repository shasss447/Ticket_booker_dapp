import React,{useState} from 'react';
import './PaymentButton.css'
import Popup from 'reactjs-popup';import { ethers } from "ethers";
//import ReactModal from 'react-modal';
// import WalletConnectButton from './WalletConnectButton';
import Lock from "./artifacts/contracts/Lock.sol/Lock.json";
const lockaddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";

function PaymentButton()
 {
  // const[metainfo,setmetainfo]=useState({
  //   wallet:" ",
  //   status:false});
  //   const getmetainfo=(data)=>{
  //     setmetainfo(data);
  //   }
  
//   const [seatsAvailable,seatHandler]=useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleDetails=async()=>{
//     setIsOpen(true);
//     await window.ethereum.request({method:'eth_requestAccounts'});
//     if (typeof window.ethereum !== "undefined") {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const contract = new ethers.Contract(
//         lockaddress,
//         Lock.abi,
//         provider
//       );
//       try {
//         const data = await contract.getdata();
//         seatHandler(data);
//       } catch (error) {
//         console.log("Error: ", error);
//       }
//   }
//   else{
//     console.log("install metamask")
//   }
// };
  const paymentHandler=async()=>{
    // <WalletConnectButton getmetainfo={getmetainfo} />
    await window.ethereum.request({method:'eth_requestAccounts'});
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer=provider.getSigner();
      const contract = new ethers.Contract(
        lockaddress,
        Lock.abi,
        signer
      );
      try {
        const data = await contract.getdata();
        console.log("data: ",data[0]);
        console.log("data: ",data[1]);
      } catch (error) {
        console.log("Error: ", error);
      }
      const transaction=await contract.book();
      await transaction.wait();
      try {
        const seats = await contract.getdata();
        console.log("data: ",seats[0]);
      } catch (error) {
        console.log("Error: ", error);
      }

    }
  }
 return (
  <div>
  <Popup  trigger={<button className='paybutt'>Pay</button>} modal>
    {
    close =>
     (
        <div className='popup'>
          <p>You are about to do the payment</p>
        <button onClick={paymentHandler}className='popbutt'>OK</button> 
        <button onClick={() => {close();}}className='popbutt'>CLOSE</button>      
        </div>
     )
    }
  </Popup>
{/* <button className='pabutt'onClick={handleDetails}>Details</button>
<ReactModal isOpen={isOpen}contentLabel="Example Modal"onRequestClose={() => setIsOpen(false)}>Numbers of seats available={seatsAvailable}</ReactModal> */}
</div>
  )
}

export default PaymentButton