import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import IntroSection from "./IntroSection/IntroSection";
import HomeSlider from "./slider";
import "../App.css";



function Home() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [events, setEvent] = useState([]);

    useEffect(() => {
        axios.get("https://api.preciouscollege.edu.np/news-event/event/").then((response) => {
            setEvent(response.data);
        });
    }, []);

    return ( <
        div >
        <
        Header / >

        <
        main > { " " } { /* <!-- slider Area Start--> */ } { " " } <
        HomeSlider / >


        <
        div style = {
            { background: "#D1E7E0" } } >
        <
        div class = "container"
        style = {
            { paddingTop: "5rem" } } > { " " } { /* <!-- Section Tittle --> */ } { " " } <
        div class = "row" >
        <
        div class = "col-md-6" >
        <
        IntroSection header = "Making Difference Positively"
        description = {
            [
                'Precious National College (Precious National Academy Higher Secondary School/College) was founded two and half decades back in 1985 AD in Balaju, Kathmandu, in close proximity to ring road. PNC since its inception, has been relentlessly striving to create an excellent educational abode to explore, enhance and excel the latent potentials of an individual to its fullest. Hence, PNC has emerged as a premier academy in the capital for higher education.',
                'To materialise its pivotal dictum, “An institution for academic excellence & moral values” PNC has harboured a unique blend of professional expertise and dedication: the exceptionally qualified & experienced faculties and a dynamic management team of highly acclaimed individuals from various sectors of society. Committed to cater for quality education and character building, PNC aspires to equip its products with high degree of proficiency and aptitude in order to cope up with emerging challenges of the 21st century.',
            ]
        }

        /> <
        /div> <
        div class = "col-md-6" >
        <
        img style = {
            { marginTop: "10rem" } }
        class = "mg-fluid img-thumbnail"
        height = { 800 }
        src = "assets/img/building.png" / >
        <
        /div> <
        /div> <
        /div> <
        /div> { /* <!-- slider Area End--> */ } { /* <!-- Favourite Places Start/ --> */ } { " " } <
        div style = {
            { backgroundColor: "#54AAFF", paddingTop: "5rem" } }
        class = "favourite-place place-padding" >
        <
        div class = "container" > { " " } { /* <!-- Section Tittle --> */ } { " " } <
        div class = "row" >
        <
        div class = "col-lg-12" >
        <
        div class = "section-tittle text-center" >

        <
        h2 style = {
            { color: "" } } > Events < /h2>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        div class = "row content" > { " " } {
            events.map((place, key) => {
                return ( <
                    div class = "col-xl-4 col-lg-4 col-md-6" >
                    <
                    div class = "single-place mb-30" >
                    <
                    Link to = {
                        {
                            pathname: `/event/${place.id}`,
                        }
                    } >
                    <
                    div class = "place-img"
                    style = {
                        { width: "20rem", height: "12rem" } } >
                    <
                    img src = { `https://api.preciouscollege.edu.np${place.image}` }
                    alt = { place.image }
                    />{" "} <
                    /div>{" "} <
                    /Link>{" "} <
                    div class = ""
                    style = {
                        { border: "none !important" } } >
                    <
                    div class = ""
                    style = {
                        { border: "none !important" } } >
                    <
                    Link to = {
                        {
                            pathname: `/event/${place.id}`,
                        }
                    } >
                    <
                    h3 style = {
                        { color: "rgb(60 44 42)", fontWeight: "520" } } > { place.title } < /h3>{" "} <
                    /Link> <
                    p style = {
                        { color: "rgb(60 44 42)", marginRight: "3rem", fontSize: ".9rem" } } > { place.description } < /p>{" "} <
                    /div>{" "} <
                    /div>{" "} <
                    /div>{" "} <
                    /div>
                );
            })
        }; { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>{" "}


        <
        /main>{" "} <
        Footer / >
        <
        /div>
    );
}

export default Home;