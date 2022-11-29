import React,{useState} from 'react'

export default function PaymentButton() {
  const[amount,setamount]=useState(0)
  const[amountpaid,setpaidamount]=useState(0)
  const paymentHandler=e=>{
    setamount(e.target.value);
  }
  const submitHandle=e=>{
    e.preventDefault();
    setpaidamount(amount);
  } 
  return (
    <div>
      <form onSubmit={submitHandle}>
      <input type='number' placeholder="amount of ether" value={amount}onChange={paymentHandler}></input>
    <button type='submit'>pay</button>
        </form> 
        <h2>{amountpaid}</h2> 
    </div>
  )
}
