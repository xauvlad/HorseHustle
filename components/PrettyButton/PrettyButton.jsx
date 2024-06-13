import React from 'react'
import "./prettybutton.css"

const PrettyButton = ({text, handleClick, type}) => {
  return (
    <div className='frame'>
        <button className='custom-btn btn-15' onClick={handleClick} type={type}>{text}</button>
    </div>
  )
}

export default PrettyButton