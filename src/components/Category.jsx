import React, { useState } from 'react'

const Category = ({ products, setProducts, currentCategories }) => {
  // const [categories, setCategories] = useState([]);

  return (
    <>
      <div className="flex items-center justify-between py-2 px-4 border rounded-3xl hover:placeholder-slate-950">
        <p>Category</p>
        <div className="flex items-center hover:cursor-pointer">
          <select 
            onChange={(e)=>{
              const cat = products?.find((c) => c.category === e.target.value);
              console.log(cat);
              setProducts(cat);
            }}
            id=""
          >
            {
              currentCategories.map((category, i) => {
                return (
                  <option key={i} value={category.id}>
                    {category}
                  </option>
                )
              })
            }
          </select>
        </div>
      </div>
    </>
  )
}

export default Category
