import React from 'react'

const IntroSection = ({ image, header, description, otherClass = '' }) => {
    return (
        <div className="container">
            <div className={`intro-container ${otherClass}`}>
                <div className="content-container">
                    <h5 style={{color:"black"}}>Introduction</h5>
                    <h1 style={{color:"#8B0000"}}>Welcome to Precious National College</h1>
                    <h2 style={{color:"#A52A2A"}}>{header}</h2>
                    {description.map((d) => <p >{d}</p>)}
                    {/* <button>{btn}</button> */}
                </div>
              
            </div>
        </div>
    )
}

export default IntroSection