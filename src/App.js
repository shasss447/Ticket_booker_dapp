//import logo from './logo.svg';
import './App.css';
import {ethers} from 'ethers';
import WelCome from './WelCome';
import Lock from "./artifacts/contracts/Lock.sol/Lock.json"
import PaymentButton from './PaymentButton';
const deployedAdress= "0x5FbDB2315678afecb367f032d93F642f64180aa3"
function App() {
  async function reqAccount(){
    await window.ethereum.request({method:'eth_requestAccounts'})
  } 
  // async function fetchamount(){
  //   if(typeof window.ethereum!=="undefined"){
  //     await reqAccount();
  //     const provider= new ethers.providers.Web3Provider(window.ethereum);
  //      try{
  //        const data=await contract.Lock();
  //        console.log("amount:")
  //      }
  // }
  async function ticketbooker(amount){
    if(typeof window.ethereum!=="undefined"){
      await reqAccount();
      const provider= new ethers.providers.Web3Provider(window.ethereum);
      const signer=provider.getSigner();
      const contract= new ethers.Contract(deployedAdress,Lock.abi,signer);
      const transaction= await contract.book(amount);
      await transaction.wait();
    }
  }
  return (
    <div className='App'>
        <WelCome/>
        <PaymentButton ticketbooker={ticketbooker}/>
    </div>  
  );
}


export default App;