import React from 'react'

const ProductContainer = () => {
  return (
    
    <div className='product-container'>

    <div className='product-image-container'>

        <img src='https://th.bing.com/th/id/OIP.EgT91HhpoOnY8YRmNA-vyAHaHa?rs=1&pid=ImgDetMain' alt='' className='product-image' />

    </div>

    <div className='product-info-container'>

        <div className='percent-off-container' must-have="gap">

            <span className='percent-off'>22% off</span>

            <span className="special-occasion-tag">{""}</span>

        </div>


        <div className='price-container' must-have="gap">

            <span className='product-price'>${`222`}</span>

            <span className='mrp-title'>M.R.P:</span>

            <span className='striked-price'>${'4000'}</span>

        </div>

        <div className='product-title-desc-container'>

            <p className='product-title'>gta 4 grand theft auto iv windows</p>

        </div>



    </div>

</div>

  )
}

export default ProductContainer