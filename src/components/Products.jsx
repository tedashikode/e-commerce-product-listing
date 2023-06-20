import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

import DisplayProducts from './DisplayProducts'

import Search from '../components/Search'
import Category from '../components/Category'


import { LeftChevron } from '../assets/icons/LeftChevron'
import { RightChevron } from '../assets/icons/RightChevron'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      async function productsFetched(){
        const response = await fetch('https://fakestoreapi.com/products');
        const productsResponse = await response.json();
        return productsResponse;
      }

      productsFetched()
        .then(productsResponse => {
          //return fetched products
          productsResponse;
          console.log("These are the products...");
          console.log(productsResponse); 
          setProducts(productsResponse);
          setIsLoading(false);
          setData(productsResponse);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setIsLoading(false);
        });  


  }, [])

  const currentCategories = [...new Set(products.map((product) => product.category))];
  console.log("These are the categories: ", currentCategories);

  const productsPerPage = 5;
  const pagesVisited = pageNumber * productsPerPage; 
  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  const searchProducts = (e) => {
    e.prevent.Default();
    console.log("searching...");
    setData(products.filter(f => f.title.toLowerCase().includes(e.target.value)));
    setProducts(data);
    console.log(products);
  }

  return (
    <div className="w-full h-full">
      <div className="flex items-center">
            <Search handleClick={searchProducts}/>
            <Category
              currentCategories={currentCategories}
              products={products}
              setProducts={setProducts}
            />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 pl-4 pt-4">
        { isLoading 
          ? 
            (<p>Loading Products...</p>)
          : 
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
          <span className="w-10 h-10 rounded-md flex items-center justify-center bg-sky-500 mx-1 hover:pointer">
            <LeftChevron />
          </span>
        }
        nextLabel={
           <span className="w-10 h-10 rounded-md flex items-center justify-center bg-sky-500 mx-1 hover:pointer">
            <RightChevron />
          </span>
        }
        containerClassName="mt-8 mb-4 flex justify-center items-center"
        pageCount={pageCount}
        onPageChange={changePage}
        pageClassName="w-10 h-10 rounded-md flex items-center justify-center bg-sky-500 mx-1 hover:pointer"/>
    </div>
  )
}

export default Products
