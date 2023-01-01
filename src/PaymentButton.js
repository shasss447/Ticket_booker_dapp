import React,{useState} from 'react';
import Popup from 'reactjs-popup';

function PaymentButton()
 {
 return (
  <div>
  <Popup trigger={<button>Pay</button>} modal>
    {
    close =>
     (
        <div>
          <p>You are about to do the payment</p>
        <button>OK</button> 
        <button onClick={() => {close();}}>CLOSE</button>      
        </div>
     )
    }
  </Popup>
</div>
  )
}

export default PaymentButton