import React from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, useNavigate } from "react-router-dom";

function News() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [news, setNews] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get("https://api.preciouscollege.edu.np/news-event/news/").then((response) => {
            setNews(response.data);
        });
    }, []);

    return ( <
        div >
        <
        Header / >
        <
        main > { " " } { /* <!-- slider Area Start--> */ } { " " } <
        div class = "slider-area " > { " " } { /* <!-- Mobile Menu --> */ } { " " } <
        div class = "single-slider slider-height2 d-flex align-items-center"
        style = {
            {
                backgroundImage: `url("assets/img/event.jpg")`,
            }
        } >
        <
        div class = "container" >
        <
        div class = "row" >
        <
        div class = "col-xl-12" >
        <
        div class = "hero-cap text-center" >
        <
        h2 > Our News < /h2>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} { /* <!-- slider Area End--> */ } { /* <!-- Favourite Places Start/ --> */ } { " " } <
        div style = {
            { background: "#F3EED9" } }
        class = "favourite-place place-padding" >
        <
        div class = "container" >

        <
        div class = "row" > { " " } {
            news.map((place, key) => {
                return ( <
                    div class = "col-xl-4 col-lg-4 col-md-6" >
                    <
                    div class = "single-place mb-30" >
                    <
                    Link to = {
                        {
                            pathname: `/place/${place.id}`,
                        }
                    } >
                    <
                    div class = "place-img" >
                    <
                    img src = { `https://api.preciouscollege.edu.np${place.image}` }
                    alt = { place.image }
                    />{" "} <
                    /div>{" "} <
                    /Link>{" "} <
                    div class = "place-cap" >
                    <
                    div class = "place-cap-top" >
                    <
                    a href = "#" > { " " } <
                    h3 > { place.title } < /h3>{" "} <
                    /a>{" "} <
                    p > { place.description } < /p>{" "} <
                    /div>{" "}

                    <
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

export default News;