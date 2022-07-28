import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Home from "./Pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Places from "./Pages/places";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Category from "./Pages/category";
import Login from "./Pages/login";
import Register from "./Pages/register";
import AddBlog from "./Pages/add_blog";
import Profile from "./Pages/Profile";
import Notification from "./Pages/notification";
import AddEvent from "./Pages/addEvent";

import { AuthContext } from "./helpers/AuthContext";
import PageNotFound from "./Pages/pagenotfound";
import ShowEvent from "./Pages/event";
import Hotel from "./Pages/hotels";
import SinglePlace from "./Pages/single_event";
import AddHotel from "./Pages/addHotels";
import AddPlaces from "./Pages/AddPlaces";
import ImageComponent from "./Pages/image";
import AboutComponent from "./Pages/About/About";
import Program from "./Pages/Programs/Program";
import News from './Pages/places';
import SingleEvent from "./Pages/single_event";
import Blog from "./Pages/blog";
import SingleBlog from "./Pages/single_blog";

function App() {
    const [authState, setAuthState] = useState({
        username: "",
        email: "",
        id: 0,
        password: "",
        status: false,
        isVerified: false,
    });

    useEffect(() => {
        axios
            .get("http://localhost:3001/users/auth", {
                headers: {
                    accessTokenFromFrontend: localStorage.getItem("accessToken"),
                },
            })
            .then((response) => {
                if (response.data.error) {
                    setAuthState({...authState, status: false });
                } else {
                    // alert("User" + response.data.username);
                    setAuthState({
                        username: response.data.username,
                        id: response.data.id,
                        email: response.data.email,
                        password: response.data.password,
                        isVerified: response.data.isVerified,
                        status: true,
                    });
                }
            });
    });

    return ( <
        AuthContext.Provider value = {
            { authState, setAuthState }
        } >
        <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > } > { " " } <
        /Route>{" "} <
        Route path = "/home"
        element = { < Home / > } > { " " } <
        /Route>{" "} <
        Route path = "/programs"
        element = { < Program / > } > { " " } <
        /Route>{" "} <
        Route path = "/about"
        element = { < AboutComponent / > } > { " " } <
        /Route>{" "} <
        Route path = "/contact"
        element = { < Contact / > } > { " " } <
        /Route>{" "} <
        Route path = "/categories"
        element = { < Category / > } > { " " } <
        /Route>{" "} <
        Route path = "/addHotel"
        element = { < AddHotel / > } > { " " } <
        /Route>{" "} 

        <
        Route path = "/blog"
        element = { < Blog / > } > { " " } <
        /Route>{" "}


        <
        Route path = "/addEvent"
        element = { < AddEvent / > } > { " " } <
        /Route>{" "} <
        Route path = "/addPlace"
        element = { < AddPlaces / > } > { " " } <
        /Route>{" "} <
        Route path = "/gallery"
        element = { < ImageComponent / > } > { " " } <
        /Route>{" "} <
        Route path = "/show_event"
        element = { < ShowEvent / > } > { " " } <
        /Route>{" "} <
        Route path = "/news"
        element = { < News / > } > < /Route> <
        Route path = "/profile"
        element = { < Profile / > } > < /Route> <
        Route path = "/notification"
        element = { < Notification / > } > < /Route> {!authState.status && ( < > <
        Route path = "/login"
        element = { < Login / > } > { " " } <
        /Route>{" "} <
        Route path = "/register"
        element = { < Register / > } > { " " } <
        /Route>{" "} < / >
    )
} <
Route path = "/add_blog"
element = { < AddBlog / > } > { " " } <
    /Route>{" "} <
Route path = "/event/:id"
element = { < SingleEvent / > } > { " " } <
    /Route>{" "}

<
Route path = "/blog/:id"
element = { < SingleBlog / > } > { " " } <
    /Route>{" "} <
    Route path = "*"
element = { < PageNotFound / > } > { " " } <
    /Route>{" "} < /
Routes > { " " } <
    /Router>{" "} < /
AuthContext.Provider >
);
}

export default App;
