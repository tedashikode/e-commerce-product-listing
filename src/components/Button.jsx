import React from 'react'

const Button = ({ btnName, handleClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="w-32 h-8 border-2 border-black rounded-3xl bg-sky-500 text-left px-4"
      >
        {btnName}
      </button>
    </>
  )
}

export default Button
