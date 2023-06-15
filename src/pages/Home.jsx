import React from 'react'

import Search from '../components/Search'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
      <div className="p-0 m-0 w-full h-full grid grid-cols-5"> 
        <div className="w-48">
          <Sidebar /> 
        </div>
        <div className="col-span-4">
          <Banner />
          <Search />
          <Products />
        </div>
      </div>
    </>
  )
}

export default Home

