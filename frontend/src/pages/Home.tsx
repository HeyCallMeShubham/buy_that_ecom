
import React from 'react';

import "../../src/styles/pages/home.css"

import ProductsSlide from '../components/ProductSlide/ProductsSlide';
import ProductsSlide2 from '../components/ProductSlide/ProductSlide2';
import BoxRowsContainer from '../components/BoxRowsContainer/BoxRowsContainer';

const Home = () => {


  const bg_banner_images: string[] = [

    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/pcacc/jup24/3b/Starting3000x1200._CB543528423_.jpg",



  ]


  return (
    <div className="home-page-container">

      <div className='main-item-container'> {/* main-item-container start */}

        <div className='bg-image-container' > {/* bg-image-container start */}

          <ul>

            {bg_banner_images.map((image: string) => (

              <img src={image} alt={image} />

            ))}

          </ul>


        </div> {/* bg-image-container end */}



        <div className='products-section'> {/*products-section start*/}


          <BoxRowsContainer />


          <ProductsSlide />
          <ProductsSlide2 />

 



        </div> {/*products-section end*/}


      </div> {/* main-item-container end*/}


    </div >
  )
}


export default Home;




