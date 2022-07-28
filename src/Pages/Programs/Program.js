import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PlusTwoProgram from './components/PlusTwoProgram';
import SchoolProgram from './components/SchoolProgram';
import Header from "../header";
import BachelorProgram from './components/BachelorProgram';
import Footer from "../footer";

const Program = () => {
    const [tabBarActive, setTabBarActive] = useState(0);

    const changeActive = (index) => {
        setTabBarActive(index)
    }

    return (
        <div className="about" style={{background:"#F3EED9"}}>
           <Header />
            <div className="padding-top">

            <div class="tab-container tab ">
                    <button style={{color:"rgb(191 53 32)"}}  class="tablinks" onClick={() => changeActive(0)}>School</button>
                    <button style={{color:"rgb(191 53 32)"}}  class="tablinks" onClick={() => changeActive(1)}>Grade XI & XII</button>
                    <button style={{color:"rgb(191 53 32)"}}  class="tablinks" onClick={() => changeActive(2)}>Bachelors</button>
                </div>

                <div className="padding-top"></div>

                {tabBarActive == 0 ?
                    <SchoolProgram /> : tabBarActive == 1 ?
                        <PlusTwoProgram /> : < BachelorProgram/>}
            </div>
            <Footer />
        </div>
    )
}

export default Program