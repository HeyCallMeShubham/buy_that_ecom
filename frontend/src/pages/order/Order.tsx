import React from 'react'

import "../../styles/pages/order.css"
import { MdKeyboardArrowDown } from "react-icons/md";
const Order = () => {
  return (

    <div className='grid-container'>

      <div className='content-container'>

        <div className='row-1'> {/*row-1 start*/}

          <h2 className='column-1'>Your Orders</h2>

          <div className='search-bar column-2'>

            <form>

              <input type='text' id='order-search' />

              <button className='btn search-order-btn'>Search Orders</button>

            </form>

          </div>


        </div> {/*row-1 end */}





        <div className='row-2 order-related-nav-links'> {/*row-2 start*/}

          <ul>

            <li>Orders</li>
            <li>Buy Again</li>
            <li>Not Yet Shipped</li>
            <li>Cancelled Orders</li>

          </ul>

        </div> {/*row-2 end */}





        <div className='row-3 orders-container'> {/*row-3 start*/}

          <div className='order'> {/*order start*/}

            <div className='row1'> {/*row1 start*/}

              <div className='column1'>


                <span className='order-placed-span'>
                  ORDER PLACED

                  <span className='order-placed-date'>
                    25 january 2025
                  </span>

                </span>




                <span className='order-total-price-span'>
                  TOTAL

                  <span className='order-total-price'>
                    $805
                  </span>

                </span>




                <span className='ship-column'>

                  SHIP TO

                  <span className='ship-to'>

                    {"account name"}

                    <span className='down-arrow'>

                      <MdKeyboardArrowDown />

                    </span>

                  </span>

                </span>



              </div>



              <div className='column2'>

                <span className='row1 order-id'>ORDER # {`6242r-3d132-2ee213-43r3w`}</span>

                <div className='row2'>

                  <span className='view-order-details'>View order details</span>

                  <span className='invoice'>

                    Invoice

                    <span className='down-arrow'>

                      <MdKeyboardArrowDown />

                    </span>

                    <span>


                    </span>

                  </span>

                </div>



              </div>


            </div>{/*row1 end*/}




            <div className='row2'> {/*row2 start*/}

              <div className='column-1'>

                <div className='row1'>

                  <h3>{`Arriving ${'Wednesday'}`}</h3>

                  <span className='product-delivery-status'>Delivered</span>

                </div>


                <div className='row2 product-info'>

                  <div className='product-image-container'>

                    <img src="" alt='' className='product-image' />

                  </div>

                  <p className='product-title-desc'>MONOCHROME Alba Sheepskin Leather Medium Brown Blouson Jacket</p>


                </div>



                <div className='row3'>

                  <span className='link'>Archive Order</span>

                </div>


              </div>


              <div className='column-2'>

                <button className='btn'>Track package</button>
                <button className='btn'>View or edit order</button>

              </div>



            </div> {/*row2 end*/}




          </div> {/*order end*/}





        </div> {/*row-3 end */}




      </div>

    </div>

  )
}

export default Order