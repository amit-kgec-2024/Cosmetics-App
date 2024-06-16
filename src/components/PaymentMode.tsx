import React, { useState } from 'react'

const PaymentMode = () => {
    const paymentType = ['Wallet/Postpaid', 'Credit/Debit/ATM Card', 'Net Bankink', 'EMI(Easy Installments)', 'UPI', 'Cash on Delivery']
  const [payBtn, payList] = useState("");
  return (
    <div>
      {
          paymentType.map((e)=>{
            return(<div key={e} className='py-2'>
            <input type ='radio' name='paymentType' id={e} value={e} onChange={(el)=>{payList(el.target.value)}}/>
            <label htmlFor={e}> {e}</label>
            <br/>
          </div>)
          })
        }
    </div>
  )
}

export default PaymentMode
