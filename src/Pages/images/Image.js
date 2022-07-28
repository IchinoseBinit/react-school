
import React, { useState } from 'react'

import contactUs from "../../assets/images/contact-us.jpg"
import image from "../../assets/images/image.jpg"
import {AiOutlineClose} from 'react-icons/ai'


const ImageComponent = () => {

    let gallery = [
        {
            "id": 1,
            "imgSrc": contactUs
        },
        {
            "id": 1,
            "imgSrc": image
        },
    ]

    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} />
                <AiOutlineClose onClick={() => setModel(false)}/>
            </div>
            <div className='gallery'>
                {gallery.map((item, index) => <div className='pictures' key={index} onClick={() => getImg(item.imgSrc)}>
                    <img src={item.imgSrc} style={{ width: "100%" }} />
                </div>)}
            </div>
        </div>
    )
}

export default ImageComponent