import React from 'react'

const Button = ({ btnName, handleClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
      >
        {btnName}
      </button>
    </div>
  )
}

export default Button
