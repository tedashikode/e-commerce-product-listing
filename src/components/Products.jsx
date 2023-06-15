import React, { useState, useEffect } from 'react'

const Card = ({ name, price, img, description }) => {
  return(
    <>
      <div className="w-[217px] h-[293px] mb-4 border-2 border-gray-700 rounded-2xl flex flex-col overflow-hidden bg-white">
        <img 
          className="w-full h-2/3 object-contain" 
          src={img} 
          alt={description} 
        />
      
        <div className="bg-gray-700 h-1/3 w-full text-white flex flex-row justify-between rounded-b-xl mt-2">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
    </>
  )
}

const Products = () => {
  const [products, setProducts] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  
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

  const productsPerPage = 5;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = products
  .slice(pagesVisited, pagesVisited + productsPerPage)
  .map(product => (
    <Card 
      name={product.title} 
      price={`$${product.price}`} 
      img={product.image} 
      description={`${product.title} image`}
    />
  ))

  return (
    <div className="w-full h-full grid grid-cols-5 pt-6 px-4 gap-4 bg-orange-500">
      {displayProducts}
    </div>
  )
}

export default Products
