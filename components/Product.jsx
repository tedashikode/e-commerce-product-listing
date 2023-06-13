import React from 'react'

const Card = () => {

  const products = fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json)
  )
  console.log(products);

  return(
    <div className="h-10 w-10 rounded bg-slate-700">
      <h1>This is a card component</h1>
    </div>
  )
}

const Product = () => {
  return (
    <div className="h-full w-full">
      <Card />
    </div>
  )
}

export default Product
