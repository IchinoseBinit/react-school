import React from 'react'

const IntroSection = ({ image, header, description, otherClass = '' }) => {
    return (
        <div className="container">
            <div className={`intro-container ${otherClass}`}>
                <div className="content-container">
                    <h5>Introduction</h5>
                    <h1>Welcome to Precious National College</h1>
                    <h2>{header}</h2>
                    {description.map((d) => <p>{d}</p>)}
                    {/* <button>{btn}</button> */}
                </div>
                <div className="image-container">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default IntroSection