import React from 'react'

import Search from '../components/Search'
import Product from '../components/Product'

const Home = () => {
  return (
    <div className="w-full h-full bg-orange-400"> 
        <h1>Welcome to the Product Listing Page</h1>
        <Search />
        <Product />
    </div>
  )
}

export default Home

