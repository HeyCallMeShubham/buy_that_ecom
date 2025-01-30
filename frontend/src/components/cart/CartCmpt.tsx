import React from 'react'
import "../../styles/components/cart.css"
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";


const CartCmpt = () => {

  return (

    <div className='flex-container'>



      <div className='item-box'>

        <input className='checkbox' type="checkbox" />

        <img className='item-image' src='data:image/jpeg;base64,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' alt='https://m.media-amazon.com/images/I/71o44g5yjKL._AC_AA180_.jpg' />

        <div className='item-text-info'>

          <div className='titleAndPrice'>
          
            <h2 className='title'>Player The of believing</h2>
          
              <span className='price'>$500</span>

          </div>


          <span className='item-stock-status'>{true ? "In stock" : "Out of stock"}</span>


          <div className='other-options'>

            <div className='increase-decrease-quantity-buttons-container'>

              <span className='btn icon'><MdDelete /></span>

              <span>{1}</span>

              <span className='btn icon'><FaPlus /></span>

            </div>


            <span className='delete-from-cart link'>Delete</span>

          </div>


        </div>

      </div>




    </div>

  )
}

export default CartCmpt