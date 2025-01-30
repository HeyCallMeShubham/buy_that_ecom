import React from 'react'

import "../../styles/components/buyAndAddToCart.css"

const BuyAndAddToCart = () => {
    return (
        <div className='buyAndAddToCart-main-container'>


            <div className='row1'>


                <div className=''>

                    Quantity:

                    <select id="quantity" className='quantity-list' name="">

                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>

                    </select>

                </div>



                <button className='btn add-to-cart-btn'>Add to Cart</button>

                <button className='btn buy-now-btn'>Buy Now</button>


            </div>


        </div>
    )
}

export default BuyAndAddToCart