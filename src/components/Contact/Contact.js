import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'


const Contact = () => {

    let color = "#e8604c";

    return (
        <div className='contact'>
            <div className="img ">
                <div className="overlay ">
                    <h1>Contact Us</h1>
                    <div className="bread-crumbs">
                        <Link to='/'>Home</Link>
                        <p> / </p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="contact-container">
                    <div className="left-container">
                        <h2>Talk with us</h2>
                        <h3>
                            Any Question? <br />
                            Feel Free to Contact
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi explicabo hic reiciendis labore temporibus eaque doloribus neque consequatur consequuntur dignissimos, tempore sed id eligendi earum tenetur suscipit vero nobis?
                        </p>

                    </div>
                    <div className="right-container">
                        <form action="">
                            <div className="form-group">
                                <input type="text" placeholder='Your Name' />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder='Your Name' />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder='Your Name' />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder='Your Name' />
                            </div>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Write message'></textarea>
                            <div className="button">
                                <button className='btn'> Send A Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="address-container">
                    <div className="address-card">
                        <HiOutlineLocationMarker size={24} color={color} />
                        <p>Mhepi Marg</p>
                    </div>
                    <div className="address-card">
                        <AiOutlineMail size={24} color={color} />
                        <p>info@preciouscollege.edu.np</p>
                    </div>
                    <div className="address-card">
                        <AiOutlinePhone size={24} color={color} />
                        <p>+977 1 4353290</p>
                    </div>
                </div>
            </div>

            <iframe className='maps' src="https://maps.google.com/maps?q=precious%20national%20college&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no">
            </iframe>



        </div>
    )
}

export default Contact