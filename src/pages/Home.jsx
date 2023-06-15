import React from 'react'

import Search from '../components/Search'
import Products from '../components/Products'
import Banner from '../components/Banner'
import Category from '../components/Category'

const Home = () => {
  return (
    <>
      <div className="p-0 m-0 w-full h-full flex"> 
        <div className="flex-grow">
          <Banner />
          <div className="flex items-center">
            <Search />
            <Category />
          </div>
          <Products />
        </div>
      </div>
    </>
  )
}

export default Home

