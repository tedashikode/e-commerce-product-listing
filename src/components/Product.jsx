import React, { useState, useEffect } from 'react'

const Card = ({ name, price, img, description }) => {
  return(
    <>
      <div className="border rounded-sm flex flex-col gap-4">
        <div className="bg-lime-400 flex flex-col items-center ">
          <img 
            className="object-fit" 
            width={144}
            height={144}
            src={img} 
            alt={description} 
            />
        </div>
        <div className="flex flex-row justify-between">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
    </>
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
    <div className="grid grid-cols-4 gap-4">
      {products.map(product => (
        <Card 
          name={product.title} 
          price={product.price} 
          img={product.image} 
          description={product.description}
        />
      ))}
    </div>
  )
}

export default Product
