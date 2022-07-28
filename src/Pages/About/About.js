import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Members from './components/Members';
import Message from './components/Message';
import AboutSchool from './components/AboutSchool';
import Header from "../header";
import ServicesFacilities from './components/ServicesFacilities';
import Footer from "../footer";


const AboutComponent = () => {

    const [tabBarActive, setTabBarActive] = useState(0);

    const changeActive = (index) => {
        setTabBarActive(index)
    }

    return (
        <div>

<Header />
        <div style={{background:"#F3EED9"}} className="about">
           
            <div className="padding-top">

                <div class="tab-container tab ">
                    <button style={{color:"rgb(191 53 32)"}}  class="tablinks" onClick={() => changeActive(0)}>All</button>
                    {/* <button style={{color:"rgb(191 53 32)"}}  class="tablinks" onClick={() => changeActive(1)}>Message</button> */}
                    {/* <button style={{color:"rgb(191 53 32)"}}  class="tablinks" onClick={() => changeActive(2)}>Members</button> */}
                    <button style={{color:"rgb(191 53 32)"}}  class="tablinks" onClick={() => changeActive(3)}>Services & Facilities</button>
                </div>

                <div className="padding-top"></div>

                {tabBarActive == 0 ? <AboutSchool/> : tabBarActive == 1 ? <Message /> : tabBarActive == 2 ? <Members /> : <ServicesFacilities/ >} 
            </div>

        </div>
        <Footer />
        </div>

    )
}

export default AboutComponent
