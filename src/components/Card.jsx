import React from "react"

const Card = ({ name, price, img, description }) => {
    return(
      <>
        <div className="w-40 h-52 m-0 md:w-[217px] md:h-[293px] md:mb-4 border-2 border-gray-700 rounded-2xl md:flex md:flex-col overflow-hidden bg-white">
          <img 
            className="w-full h-2/3 object-contain" 
            src={img} 
            alt={description} 
          />
          <div className="bg-gray-700 h-1/3 w-full text-white rounded-b-xl mt-2">
            <p>{name}</p>
            <p>{price}</p>
          </div>
        </div>
      </>
    )
}

export default Card