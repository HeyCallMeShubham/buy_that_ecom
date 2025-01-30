import React from 'react'


import "../../styles/pages/cart.css"

import CartCmpt from "../../components/cart/CartCmpt"

const Cart = () => {
  return (
    <div className='grid-box'>

      <div className='flex-container'>

        <div className="cart-container">

          <CartCmpt />
          <CartCmpt />
          <CartCmpt />
          <CartCmpt />


        </div>



        <div className='subtotal-container'>

          <span className='subtotal-price'>Subtotal {`(${2} items)`}: $ 2000</span>


        </div>



      </div>


    </div>
  )
}

export default Cart