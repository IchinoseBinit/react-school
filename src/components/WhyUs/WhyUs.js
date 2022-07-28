import React from 'react';



const WhyUs = ({ icon, header, description }) => {



    return (
        <div className="card">
            {icon}
            <div className="top-content">
                <h6>{header}</h6>
            </div>
            <div className="body-content" >
                <p>{description}</p>
            </div>
        </div>
    )
}

export default WhyUs