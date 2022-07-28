import React from 'react'
import {FaCalendarAlt} from 'react-icons/fa'

const NewsCard = ({header, description, date}) => {
  return (
    <div className='news-card'>
        <h4>{header}</h4>
        <p>{description}</p>
        <div className="date">
            <FaCalendarAlt color='red' size={18}/>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default NewsCard