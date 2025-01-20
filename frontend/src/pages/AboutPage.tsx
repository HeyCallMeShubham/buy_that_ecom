import React from 'react';
import "../styles/pages/aboutPage.css";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdStarRate } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";
import { PiSealPercent } from "react-icons/pi";


const AboutPage = () => {
    return (
        <div className='main-container'>

            <div className="flex-box-container"> {/*flex-box-container start*/}

                <div className='item-listed-images'>


                    <img src='https://m.media-amazon.com/images/I/71goZuIha-L._SX679_.jpg' alt='https://m.media-amazon.com/images/I/71goZuIha-L._SX679_.jpg' className='product-image' />


                </div>


                <div className='selected-image-box' >

                    <img src='https://m.media-amazon.com/images/I/71goZuIha-L._SX679_.jpg' alt='https://m.media-amazon.com/images/I/71goZuIha-L._SX679_.jpg' className='image selectedImage' />

                </div>


                <div className='product-information-box' >

                    <div className='basic-info'>

                        <h1 className='product-title'>Samsung Galaxy S23 Ultra 5G AI Smartphone (Phantom Black, 12GB, 256GB Storage)</h1>



                        <Link to={``}>
                            <span className='link'>
                                visit the company store
                            </span>
                        </Link> {/*lateer this must be replaced by link*/}



                        <div className='customers-purchase-record'>


                            <span className='rating'>
                                <span className="rated"> 1.5 </span>

                                <MdStarRate className='icon starIcon ratingStarIcon' />
                                <MdStarHalf className='icon starIcon ratingStarIcon' />
                                <MdStarOutline className='icon starIcon ratingStarIcon' />
                                <MdStarOutline className='icon starIcon ratingStarIcon' />
                                <MdStarOutline className='icon starIcon ratingStarIcon' />


                                <span className='number-of-ratings'>
                                    {' '}

                                    3.092 ratings
                                </span>

                            </span>

                            <span className='boughtStatus'> 5k+ peoples bought in past month</span>

                        </div>


                    </div>




                    <div className='pricing-details'>

                        <span className='price'>

                            <span className='percentof'>-7%</span>

                            $73,000

                        </span>

                        <span className='mrp'>M.R.P.: <strike className="strikedPrice">$1,20,000</strike></span>

                        <span className='normal-text'>inclusive of all taxes</span>

                        <span className='emi-price'>
                            EMI starts at $3,548. No Cost


                            <span className='emi-available-options'> EMI available

                                {"  "}

                                <span
                                    className='emi-options link'>

                                    EMI options

                                    <MdKeyboardArrowDown />

                                </span>

                            </span>

                        </span>



                        {/*

                        
                        <div className='coupon-apply-section'>

                            <span className='cooupn-text'>Coupon</span>

                            <label htmlFor='applyCheckBox'>

                                <input type="checkbox" className='applyCheck' id='applyCheckBox' />

                                <span className='normal-text'>

                                    apply $2000 coupon


                                </span>

                            </label>

                        </div>

*/}




                    </div>



                    <div className='offers-section'> {/*offers section start*/}

                        <span className='offers--title-text'>

                            <PiSealPercent />

                            Offers

                        </span>


                        <div className='offers-box-slider'>

                            <div className='offer-box'>

                                <h6>No Cost EMI</h6>

                                <p>Upto $700000 EMI interest savings on select</p>

                                <span className='link available-offers-on-this'>2 offers {" "} <MdKeyboardArrowRight /></span>

                            </div>



                            <div className='offer-box'>

                                <h6>No Cost EMI</h6>

                                <p>Upto $700000 EMI interest savings on select</p>

                                <span className='link available-offers-on-this'>2 offers {" "} <MdKeyboardArrowRight /></span>

                            </div>
                            <div className='offer-box'>

                                <h6>No Cost EMI</h6>

                                <p>Upto $700000 EMI interest savings on select</p>

                                <span className='link available-offers-on-this'>2 offers {" "} <MdKeyboardArrowRight /></span>

                            </div>
                            <div className='offer-box'>

                                <h6>No Cost EMI</h6>

                                <p>Upto $700000 EMI interest savings on select</p>

                                <span className='link available-offers-on-this'>2 offers {" "} <MdKeyboardArrowRight /></span>

                            </div>
                            <div className='offer-box'>

                                <h6>No Cost EMI</h6>

                                <p>Upto $700000 EMI interest savings on select</p>

                                <span className='link available-offers-on-this'>2 offers {" "} <MdKeyboardArrowRight /></span>

                            </div>
                            <div className='offer-box'>

                                <h6>No Cost EMI</h6>

                                <p>Upto $700000 EMI interest savings on select</p>

                                <span className='link available-offers-on-this'>2 offers {" "} <MdKeyboardArrowRight /></span>

                            </div>



                        </div>





                    </div> {/*offers section end*/}





                    <div className='services-with-product-section'> {/*services section start*/}


                        <div className='service'>

                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB562506492_.png" alt="" className='icon-image' />

                            <p className='link'>7 days service Centre Replacement</p>

                        </div>




                    </div> {/*services section end*/}






                    <div className='available-colors-section'> {/*services section start*/}

                        <span className='selectedColor'>Colour:{"green | with exchange "}</span>

                        <div className='color'>

                            <img src="" alt="" />


                        </div>


                    </div> {/*services section end*/}


                    <div className='about-this-item'> {/*about-this-item start*/}

                        <ul className='about-item-list'>

                            <li>
                                Experience the power of Galaxy AI with
                                S23 Ultra to effortlessly perfect your photos
                                with Photo Assist, communicate quickly outside your
                                language with Live Translate or pick the right
                                tone with Chat Assist, Galaxy AI makes your
                                memories brighter, your communication easier
                                and your tone nicer and let you sail through the life
                                effortlessly, just like that!
                            </li>
                            <li>
                                Experience the power of Galaxy AI with
                                S23 Ultra to effortlessly perfect your photos
                                with Photo Assist, communicate quickly outside your
                                language with Live Translate or pick the right
                                tone with Chat Assist, Galaxy AI makes your
                                memories brighter, your communication easier
                                and your tone nicer and let you sail through the life
                                effortlessly, just like that!
                            </li>
                            <li>
                                Experience the power of Galaxy AI with
                                S23 Ultra to effortlessly perfect your photos
                                with Photo Assist, communicate quickly outside your
                                language with Live Translate or pick the right
                                tone with Chat Assist, Galaxy AI makes your
                                memories brighter, your communication easier
                                and your tone nicer and let you sail through the life
                                effortlessly, just like that!
                            </li>



                        </ul>


                    </div> {/* about this item end*/}











                </div>


            </div> {/*flex-box-container end*/}


        </div>
    )
}

export default AboutPage