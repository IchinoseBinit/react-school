import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Footer() {
    const [companyObject, setCompany] = useState({});

    const id = 1;
    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/company/${id}`).then((response) => {
            setCompany(response.data);
        });
    }, []);
    return ( <
        div >
        <
        footer > { /* <!-- Footer Start--> */ } { " " } <
        div class = "footer-area footer-padding footer-bg"
        style = {
            { backgroundImage: `url("assets/img/service/footer_bg.jpg")` } } >
        <
        div class = "container" >
        <
        div class = "row d-flex justify-content-between" >
        <
        div class = "col-xl-5 col-lg-3 col-md-5 col-sm-6" >
        <
        div class = "single-footer-caption mb-50" >
        <
        div class = "single-footer-caption mb-30" > { " " } { /* <!-- logo --> */ } { " " } <
        div class = "footer-logo" >
        <
        a href = "index.html" > { " " } <
        img height = { 50 }
        src = { "assets/img/logo.png" }
        alt = "" /
        > { " " } <
        /a>{" "} <
        /div>{" "} <
        div class = "footer-tittle" >
        <
        div class = "footer-pera" >
        <
        p > Precious National College(Precious National Academy College / School) was founded two and half decades back in 1985 AD in Balaju, Kathmandu, in close proximity to ring road. < /p>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        div class = "col-xl-3 col-lg-10 col-md-10 col-sm-10" >
        <
        div class = "single-footer-caption mb-50" >
        <
        div class = "footer-tittle" >
        <
        h4 > Address / Contact < /h4>{" "} <
        ul >
        <
        li > { " " } <
        Link to = "#" > Mhepi, Balaju, Kathmandu < /Link> <
        /li> <
        li > { " " } <
        Link to = "#" > +977 1 4353290 < /Link> <
        /li>

        <
        li > { " " } <
        Link to = "#" > 01 - 4359358 < /Link> <
        /li> <
        li > { " " } <
        Link to = "#" > info@preciouscollege.edu.np < /Link> <
        /li> <
        /ul>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "}

        <
        div class = "col-xl-3 col-lg-10 col-md-10 col-sm-10" >
        <
        div class = "single-footer-caption mb-50" >
        <
        div class = "footer-tittle" >
        <
        h4 > Quick Links < /h4>{" "} <
        ul >
        <
        li > { " " } <
        Link to = "/home" > Home Page < /Link> <
        /li> <
        li > { " " } <
        Link to = "/show_event" > Our Events < /Link> <
        /li> <
        li > { " " } <
        Link to = "/news" > Our News < /Link> <
        /li> <
        li > { " " } <
        Link to = "/gallery" > Our Gallery < /Link> <
        /li>

        <
        /ul>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} { /* <!-- Footer bottom --> */ } { " " } <
        div class = "row pt-padding" >
        <
        div class = "col-xl-7 col-lg-7 col-md-7" >
        <
        div class = "footer-copy-right" >
        <
        p > { " " } &copy; { " " } <
        script > { " " }
        document.write(new Date().getFullYear()); { " " } <
        /script>{" "}
        All rights reserved | Precious School { " " } <
        /p>{" "} <
        /div>{" "} <
        /div>{" "} <
        div class = "col-xl-5 col-lg-5 col-md-5" > { " " } { /* <!-- social --> */ } { " " } <
        div class = "footer-social f-right" >
        <
        a href = "https://www.facebook.com/precious1985/" > { " " } <
        i class = "fab fa-facebook-f" > < /i> <
        /a> <
        a href = "https://instagram.com/pnac.nepal" > { " " } <
        i class = "fab fa-instagram" > < /i> <
        /a> <
        a href = "https://www.tiktok.com/@pnac.nepal" > { " " } <
        i class = "fab fa-tiktok" > < /i> <
        /a> <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} { /* <!-- Footer End--> */ } <
        /footer> <
        /div>
    );
}
export default Footer;