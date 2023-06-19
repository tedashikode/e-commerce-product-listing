import React from 'react'

import Button from './Button'
import { DownChevron } from '../assets/icons/DownChevron'

const Category = ({ categories, setCategories, handleClick }) => {
  
  return (
    <>
      <div className="flex items-center">
        <Button 
          btnName={"Category"}
          onClick={handleClick}
        />
        <DownChevron />
      </div>
    </>
  )
}

export default Category
