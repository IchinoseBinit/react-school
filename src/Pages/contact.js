import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";
import { useNavigate } from "react-router-dom";

function Contact() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authState, setAuthState } = useContext(AuthContext);
  console.log(username, password);
  const login = () => {
    const data = { username: username, password: password };
    axios
      .post("http://127.0.0.1:3001/users/login_user", data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          // first one is name and second is access token received
          localStorage.setItem("accessToken", response.data);
          setAuthState({ ...authState, status: true });
          navigate("/home");
          window.location.reload(true);
        }
      });
  };
  return (
    <div>
      <Header />
      <div class="container">
        <div class="row">
            <div class="col-lg-12">
            <section class="">

<h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
<p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>

<div class="row">

    <div class="col-md-7 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            <div class="row">

                <div class="col-md-6">
                    <div class="md-form mb-0">
                    <label for="name" class="">Your name</label>

                        <input style={{borderRadius:"6px",backgroundColor:"rgb(230, 230, 229,0.1)",border:"0.5px #ff000021 solid",color:"black"}} type="text" id="name" name="name" class="form-control"/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="md-form mb-0">
                    <label for="name" class="">Email Address</label>

                        <input style={{borderRadius:"6px",backgroundColor:"rgb(230, 230, 229,0.1)",border:"0.5px #ff000021 solid",color:"black"}} type="text" id="name" name="name" class="form-control"/>
                    </div>
                </div>

            </div>
            <br/>

            <div class="row">
            <div class="col-md-12">
                    <div class="md-form mb-0">
                    <label for="name" class="">Phone Number</label>

                        <input style={{borderRadius:"6px",backgroundColor:"rgb(230, 230, 229,0.1)",border:"0.5px #ff000021 solid",color:"black"}} type="text" id="name" name="name" class="form-control"/>
                    </div>
                </div>
            </div>

            <br/>
            <div style={{marginBottom:"14px"}} class="row">

                <div class="col-md-12">

                    <div class="md-form">
                    <label for="message">Your message</label>

                        <textarea style={{borderRadius:"6px",backgroundColor:"rgb(230, 230, 229,0.1)",border:"0.5px #ff000021 solid",color:"black"}} type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                    </div>

                </div>
            </div>

        </form>

        <div class="text-center text-md-left">
            <a class="btn btn-primary" style={{float:"right",color:"white"}} onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
    </div>
    <div class="col-md-5 mb-md-0 mb-5">
        <h3 style={{textAlign:"center"}}>Contact Detail</h3>
        <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
   Email Address
    <span class="badge badge-primary badge-pill">info @preciouscollege.edu.np</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Phone Number
    <span class="badge badge-primary badge-pill">+977 1 4353290</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Address
    <span class="badge badge-primary badge-pill">Kathmandu, Nepal</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Address
    <span class="badge badge-primary badge-pill">Kathmandu, Nepal</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Address
    <span class="badge badge-primary badge-pill">Kathmandu, Nepal</span>
  </li>
</ul>
    </div>
    

</div>

</section>
            </div>
       
        </div>

      </div>
      <iframe className='maps' src="https://maps.google.com/maps?q=precious%20national%20college&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no">
            </iframe>
    </div>
  );
}
export default Contact;
