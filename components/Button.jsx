import React from 'react'

const Button = ({ btnName, handleClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="w-24 h-24 rounded-full bg-sky-500"
      >
        {btnName}
      </button>
    </>
  )
}

export default Button
