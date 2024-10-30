import React from 'react'

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "../../styles/utilsComponents/carousalRow.css"


const CarousalRow = () => {

    return (

        <div className='carousal-container'>


            <div className='left-carousal carousal-icon-container'>

                <span className='left-carousal-icon'>

                    <IoIosArrowBack />

                </span>

            </div>





            <div className='right-carousal carousal-icon-container'>

                <span className='right-carousal-icon'>

                    <IoIosArrowForward />

                </span>

            </div>



        </div>

    )
}

export default CarousalRow