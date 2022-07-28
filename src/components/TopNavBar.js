import React from 'react'
import { GoMail } from 'react-icons/go';
import { VscCallIncoming } from 'react-icons/vsc';
import Widget from './Widget';


const TopNavBar = () => {
  return (
    <div className='top-navbar'>
        {/* <Widget 
        icon={<GoMail />} 
        text="info@preciouscollege.edu.np"
        /> */}
        <img src="http://www.preciouscollege.edu.np/assets/images/precious-logo.png" alt="" />
        <div className="last-item">
        <Widget 
        icon={<VscCallIncoming size={28} color="#e8604c"/>} 
        text="+977 1 4353290"
        title="Call Us"
        />
        <Widget 
        icon={<GoMail size={28} color="#e8604c"/>} 
        text="info@preciouscollege.edu.np"
        title="Mail Us"
        />
        </div>

    </div>
  )
}

export default TopNavBar