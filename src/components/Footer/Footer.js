import React from 'react'
import moment from 'moment';

const Footer = () => {
  let date = moment(new Date()).format("YYYY");

  return (
    <div className='footer'>
      <p>&copy; {date} </p>
      <p>Designed by Binit</p>
    </div>
  )
}

export default Footer