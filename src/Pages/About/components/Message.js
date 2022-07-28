import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
// import {IoChevronBackwardOutline} from 'react-icons/io'

const Message = () => {

    // const [index, setIndex] = useState(0)

    // const changeIndex = () => {
    //     if (index === 1) {
    //         setIndex(0);
    //     } else {
    //         setIndex(1);
    //     }

    // }

    let messageList = [
  
        {
            "title": "Principal",
            "image": "assets/img/gopi.png",
            "name": "Gopi Raj Parajuli",
            "greeting": "Dear students and parents/guardians,",
            "message": [
                "First of all, many congratulations to all the SLC graduates on being successful in the SLC Examination also known as ‘The Iron Gate of Life’. And, very warm welcome to Precious National College (Precious National Academy Higher Secondary School) - a premier college in the capital.",
                "Precious National College (PNC) is entering its 2nd year under the new management team consisting of eminent academicians, entrepreneurs and professionals of national/international renown. At this precious hour, we would like to extend our sincere gratitude to all our esteemed guardians, well- wishers and beloved students for being the part of our noble voyage. Simultaneously, we also reiterate our commitment to making our institute truly a synonym of education excellence and career development.",
                "Within this short tenure, the team has considerably succeeded in carving out a distinct position as stated in its fundamental dictum “An institution for academic excellence and moral values”. With the aim of providing students strong foundation of academic knowledge and aptitude, we do believe in developing them into valuable human capital who will act as the change agents tomorrow. For this, we indeed make no compromise in bolstering the infrastructure, availing the modern tools and accessories, hiring the most competent professionals and serving the extensive platform for co/extra curricular activities. We in-fact leave no stone unturned to groom the future of our students at PNC.",
                "We expect co-operation from all the stakeholders in our noble endeavour toward serving the nation producing ethical, qualitative and distinguished citizens to compete in the fiercely competitive global village."
            ]
        },

    ]

    return (
        <div>
            <div className="message-container">
                <div className="container">
                    <div className="title-heading">
                        <h3>Message from</h3>
                        <h2>The {messageList[0]["title"]}</h2>
                    </div>
                    <div>
                        <div className="image-switch">
                            {/* <IoIosArrowBack className='icon' size={32} onClick={changeIndex} /> */}
                            <img src={messageList[0]["image"]} alt="Avatar" class="avatar" />
                            {/* <IoIosArrowForward className='icon' size={32} onClick={changeIndex} /> */}
                        </div>
                    </div>
                    <div className="greet">
                        <h6>{messageList[0]["greeting"]}</h6>
                        {messageList[0]["message"].map((e) => <div>
                            <p>
                                {e}
                                <br /><br />
                            </p>
                        </div>)}

                        <h5>{messageList[0]["name"]}</h5>
                        <h6>{messageList[0]["title"]}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message