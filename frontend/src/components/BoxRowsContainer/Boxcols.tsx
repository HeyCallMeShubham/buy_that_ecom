import React from 'react'

import "../../styles/components/Boxcols.css"

const Boxcols = () => {
    return (

        <>

            <div className="box-col"> {/*box-col start*/}

                <div className='heading-desc'>

                    <h2>Hello</h2>

                </div>



                <div className='listed-things-container'>



                    <div className='item-container'>

                        <div className='item-image-container'>

                            <img src="https://m.media-amazon.com/images/I/41d1SeNfhpL._SR480,440_.jpg" alt="" className="item-image" />

                        </div>

                        <p className='text'>hey its me </p>

                    </div>

                    <div className='item-container'>

                        <div className='item-image-container'>

                            <img src="https://m.media-amazon.com/images/I/41d1SeNfhpL._SR480,440_.jpg" alt="" className="item-image" />

                        </div>

                        <p className='text'>hey its me </p>

                    </div>

                    <div className='item-container'>

                        <div className='item-image-container'>

                            <img src="https://m.media-amazon.com/images/I/41d1SeNfhpL._SR480,440_.jpg" alt="" className="item-image" />

                        </div>

                        <p className='text'>hey its me </p>

                    </div>



                </div>



                <div className='item-url-container'>
                    <a href='' >click Here</a>
                </div>


            </div> {/*box-col end*/}

        </>

    )
}

export default Boxcols