import React from 'react'
import Boxcols from './Boxcols'

import "../../styles/components/boxRowsContainer.css"

const BoxRowsContainer = () => {
  
    return (
      <>

    <div className="box-rows-container">  {/*box-row-container start*/}

    <Boxcols />
    <Boxcols />
    <Boxcols />
    <Boxcols />
    <Boxcols />
    <Boxcols />
    <Boxcols />
    <Boxcols />

  </div> {/*box-row-container end*/}

      </>
  )
}

export default BoxRowsContainer