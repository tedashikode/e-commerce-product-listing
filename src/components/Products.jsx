import React, { useState, useEffect } from 'react'

const Card = ({ name, price, img, description }) => {
  return(
    <>
      <div className="w-[349px] h-[293px] mb-4 border-2 rounded-2xl flex flex-col justify-center">
          <img 
            className="w-full h-2/3 object-contain" 
            src={img} 
            alt={description} 
          />
          <div className="flex-row justify-between">
            <p>{name}</p>
            <p>{price}</p>
          </div>
      </div>
    </>
  )
}

const Products = () => {
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
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <Card 
          name={product.title} 
          price={product.price} 
          img={product.image} 
          description={`${product.title} image`}
        />
      ))}
    </div>
  )
}

export default Products
