import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

import Card from './Card'

import { LeftChevron } from '../assets/icons/LeftChevron'
import { RightChevron } from '../assets/icons/RightChevron copy'

//displaying a specified number of products per page - pagination
const DisplayProducts = ({ products, pagesVisited,  productsPerPage }) => {
  console.log("The display product is being rendered");
  console.log("These are the products being used in the display products component: ", products);

  return(
    products
      .slice(pagesVisited, pagesVisited + productsPerPage)
      .map(product => {
      return (
        <Card 
        name={product?.title} 
        price={`$${product?.price}`} 
        img={product?.image} 
        description={`${product?.title} image`}
        />
      )})                  
  )
}  

const Products = () => {
  const [products, setProducts] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  
  async function productsFetched(){
    const response = await fetch('https://fakestoreapi.com/products');
    const productsResponse = await response.json();
    return productsResponse;
  }

  useEffect(() => {
      productsFetched().then(productsResponse => {
        //return fetched products
        productsResponse;
        console.log("These are the products...");
        console.log(productsResponse); 
        setProducts(productsResponse);
      });  
  }, [])

  const productsPerPage = 5;
  const pagesVisited = pageNumber * productsPerPage;

  // const displayProducts = products
  // .slice(pagesVisited, pagesVisited + productsPerPage)
  // .map(product => (
  //   <Card 
  //     name={product.title} 
  //     price={`$${product.price}`} 
  //     img={product.image} 
  //     description={`${product.title} image`}
  //   />
  // ))

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div className="w-full h-full bg-orange-500">
      <div className="grid grid-cols-2 md:grid-cols-5 pt-6 px-4 md:gap-4">
        {
          products.length> 0 
          ?
            (
              <DisplayProducts 
                products={products}
                pagesVisited={pagesVisited}
                productsPerPage={productsPerPage}
              />
            )
          : 
            (<h1>No products</h1>)
        }
      </div>
      <ReactPaginate 
        previousLabel={
          <span>
            <LeftChevron />
          </span>
        }
        nextLabel={
           <span>
            <RightChevron />
          </span>
        }
        containerClassName="mt-8 mb-4 bg-green-950 flex justify-center items-center"
        pageCount={pageCount}
        onPageChange={changePage}
        pageClassName="w-10 h-10 rounded-md flex items-center justify-center bg-sky-500 mx-1 border-2"/>
    </div>
  )
}

export default Products
