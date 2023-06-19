import React from "react"

const Card = ({ name, price, img, description }) => {
    return(
      <>
        <div className="font-mono mt-4 w-40 h-52 md:m-0 md:w-[217px] md:h-[293px] md:mb-4 border-2 border-gray-700 rounded-2xl md:flex md:flex-col overflow-hidden bg-white">
          <img 
            className="block w-full h-2/3 object-contain" 
            src={img} 
            alt={description} 
          />
          <div className="bg-gray-700 h-1/3 max-w-full text-white rounded-b-xl mt-2 break-words px-1 py-1">
            <p className="text-sm">{name}</p>
            <p className="text-xl">{price}</p>
          </div>
        </div>
      </>
    )
}

export default Card