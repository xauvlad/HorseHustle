import React from 'react'
import "./prettybutton.css"

const PrettyButton = ({text, handleClick}) => {
  return (
    <div className='frame'>
        <button className='custom-btn btn-15' onClick={handleClick}>{text}</button>
    </div>
  )
}

export default PrettyButton