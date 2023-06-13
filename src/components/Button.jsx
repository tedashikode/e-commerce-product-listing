import React from 'react'

const Button = ({ btnName, handleClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="w-24 h-8 border rounded-sm bg-sky-500"
      >
        {btnName}
      </button>
    </>
  )
}

export default Button
