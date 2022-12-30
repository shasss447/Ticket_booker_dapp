import React from 'react';
import Popup from 'reactjs-popup';



function paymentButton() {


  
  return (
    <div>
      <Popup trigger={<button type="button" class="btn btn-outline-primary">Pay</button>} 
     position="center">
      <div>You are about to do the payment</div>
      <button>OK</button>
      <button >Cancel</button>
    </Popup>
    </div>
  )
}

export default paymentButton