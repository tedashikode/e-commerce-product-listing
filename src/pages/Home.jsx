import React from 'react'

import Search from '../components/Search'
import Product from '../components/Product'

const Home = () => {
  return (
    <div 
      className="p-0 m-0 flex flex-col w-full h-full items-center justify-center bg-raisin-black text-white"
    > 
      <h1>Welcome to the Product Listing Page</h1>
      <Search />
      <Product />
    </div>
  )
}

export default Home

