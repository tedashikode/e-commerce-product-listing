import React, { useState, useEffect } from 'react'

const Card = ({ name, price, img, description }) => {
  return(
    <div className="bg-amber-950 border rounded flex flex-col items-center">
      <h1>This is a card component</h1>
      <div className="flex flex-col">
          <img 
            className="object-contain" 
            width={208}
            height={208}
            src={img} 
            alt={description} 
          />
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

const Product = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    productsFetched()
  }, [])

  // const productsFetched = fetch('https://fakestoreapi.com/products')
  //           .then(res=> res.json())
  //           .then(json=> console.log(json)
  // )
  async function productsFetched(){
    const response = await fetch('https://fakestoreapi.com/products');
    const productsResponse = await response.json();
    return productsResponse;
    //waits until the requests completes
    // console.log(response);
    // console.log(productsResponse);
  }

  productsFetched().then(productsResponse => {
    //fetched products
    productsResponse;
    console.log("These are the products...");
    console.log(productsResponse); 
    setProducts(productsResponse);
    // console.log(products);
  });


  return (
    <div className="h-full w-full">
      {products.map(product => (
        <Card 
          name={product.name} 
          price={product.price} 
          img={product.image} 
          description={product.description}
        />
      ))}
    </div>
  )
}

export default Product
