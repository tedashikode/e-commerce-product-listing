import React from 'react'

import Products from '../components/Products'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
      <div className="p-0 m-0 w-full h-full flex flex-col font-poppins"> 
          {/* <Banner /> */}
          <div className="h-full w-full">
            <Products />
          </div>
      </div>
    </>
  )
}

export default Home

