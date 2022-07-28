import React from 'react'
// import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';



import { useState } from 'react';

const Navbar = () => {

    const [navbarActive, setNavbarActive] = useState('');

    const active = () => {
        if (navbarActive === '') {
            setNavbarActive('active');
        } else {
            setNavbarActive('');
        }
    }

    return (
        <div className="navbar-container">
            <div className="navbar">
                {/* <div className="logo">
                <img src={logo} alt="Logo" />
            </div> */}
                <div className={`sub-links ${navbarActive}`}>
                    <ul>
                        <li>
                            <NavLink to="/" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/programs">Programs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/photo-gallery">Photo Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink to="/news">News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/events">Events</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hamburger-menu" onClick={active}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar