import React from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, useNavigate } from "react-router-dom";

function Blog() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [eventList, setEvent] = useState([]);
    const [countLike, setCountLike] = useState("");
    useEffect(() => {
        axios.get("https://api.preciouscollege.edu.np/news-event/blogs/").then((response) => {
            setEvent(response.data);
        });
    }, []);

    return ( <
        div >
        <
        Header / >
        <
        main > { " " } { /* <!-- slider Area Start--> */ } { /* <!-- slider Area End--> */ } { " " } { /* <!-- Favourite Places Start/ --> */ } { " " } <
        div class = "favourite-place" >
        <
        div class = "container" > { " " } { /* <!-- Section Tittle --> */ } { " " } <
        div class = "row" >
        <
        div class = "col-lg-12" >
        <
        div class = "section-tittle text-center" >
        <
        span style = {
            { color: "#A32626", marginTop: "2rem" } } > EXPLORE YOUR IDEAS < /span> <
        h2 > Blogs < /h2>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        div class = "row" > { " " } {
            eventList.map((event, key) => {
                return ( <
                    div class = "col-xl-4 col-lg-4 col-md-6" >
                    <
                    div class = "single-place mb-30" >
                    <
                    div class = "place-img" >
                    <
                    img src = { `${event.image}` }
                    alt = "" /
                    >
                    <
                    /div>{" "} <
                    div class = "place-cap" >
                    <
                    div class = "place-cap-top" >
                    <
                    span > < /span>{" "} <
                    a href = "#" > { " " } <
                    Link to = {
                        {
                            pathname: `/blog/${event.id}`,
                        }
                    } >
                    <
                    h3 > { event.title } < /h3>{" "}

                    <
                    /Link> <
                    /a>{" "} <
                    p class = "dolor" > { " " } <
                    span > { event.description } < /span>{" "} <
                    /p>{" "} <
                    /div>{" "} <
                    div class = "place-cap-bottom" >
                    <
                    ul >
                    <
                    li > { event.veneu } < /li>{" "} <
                    /ul>{" "} <
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

export default Blog;