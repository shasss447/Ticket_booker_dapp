import React,{useState} from 'react'
export default function PaymentButton(props) {
  const[amount,setamount]=useState(0)
  //const[amountpaid,setpaidamount]=useState(0)
  const paymentHandler=e=>{
    setamount(e.target.value);
  }
  function amountSender(){
    props.ticketbooker(amount)
  }
  // const submitHandle=e=>{
  //   e.preventDefault();
  //   setpaidamount(amount);
  // } 
  return (
    <div>    
      <input type='number' placeholder="amount of ether" value={amount}onChange={paymentHandler}></input>
    <button className="button"type='submit' onClick={amountSender}>pay</button>
    </div>
  )
}
