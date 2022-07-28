import React from 'react'

const Widget = ({ icon, title, text, otherClassName = '' }) => {
  return (
    <div className={`widget ${otherClassName}`}>
      {icon }
      <div className="description">
        <h6 className='text'>{title}</h6>
        <p className='text'>{text}</p>
      </div>
    </div>
  )
}

export default Widget