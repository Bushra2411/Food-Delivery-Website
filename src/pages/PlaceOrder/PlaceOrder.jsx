import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount }= useContext(StoreContext)

  return (
    <form className='place-order'>
        <div className="place-order-left">
         <p className="title">Delivery Information</p>
         <div className="multi-fields">
            <input type="text" placeholder='First name'/>
            <input type="text" placeholder='Last name'/>
          </div>
             <input type="email" placeholder='Email address'/>
             <input type="text" placeholder='Street'/>
           <div className="multi-fields">
              <input type="text" placeholder='city'/>
              <input type="text" placeholder='state'/>
          </div>
          <div className="multi-fields">
             <input type="text" placeholder='First name'/>
             <input type="text" placeholder='Last name'/>
          </div>
          <div className="multi-fields">
             <input type="text" placeholder='Zip code'/>
             <input type="text" placeholder='Country'/>
          </div>
           <input type="text" placeholder='Phone'/>
        </div>
        <div className="place-order-right">
        <div className="cart-total">
              <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>৳ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>৳ {100}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>৳ {getTotalCartAmount()+100}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>

        </div>
    </form>
  )
}

export default PlaceOrder