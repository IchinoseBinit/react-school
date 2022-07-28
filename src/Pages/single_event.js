import React from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function SingleEvent() {
  let n = useNavigate();

  const { authState } = useContext(AuthContext);
  let { id } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [event, setEvent] = useState({});
  const [hotelList, setHotelList] = useState([]);
  const [objectComments, setObjectComment] = useState([]);
  const [comment, setCommentInsert] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios.get(`https://api.preciouscollege.edu.np/news-event/event/${id}`).then((response) => {
      setEvent(response.data);
    });
  }, []);

  const addComment = (e) => {
    axios
      .post(
        "http://127.0.0.1:3001/comments/insert",
        {
          body: comment,
          PlaceId: id,
        },
        {
          headers: {
            accessTokenFromFrontend: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert(response.data);
          n("/");
          window.location.reload(true);
        }
      });
  };

  return (
    <div>
      <Header />
      <main>
        <section class="blog_area single-post-area section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 posts-list">
                <div class="single-post">
                  <div class="feature-img">
                    <img
                      class="img-fluid"
                      style={{margin: "0 auto"}}
                      src={`https://api.preciouscollege.edu.np${event.image}`}
                      alt=""
                    />
                  </div>{" "}
                  <div class="blog_details">
                    <h2> {event.title} </h2>{" "}
                    <ul class="blog-info-link mt-3 mb-4"> </ul>{" "}
                    <p class="excert"> {event.description} </p>{" "}
                  </div>{" "}
                </div>
              </div>{" "}
              <div class="col-lg-4 posts-list">
                {" "}
                {hotelList.map((hotel, key) => {
                  return (
                    <div
                      style={{ border: "solid 1px", padding: "9px" }}
                      class="single-place mb-30"
                    >
                      <div class="place-img">
                        <p class="dolor"> Hotel name: {hotel.title} </p>{" "}
                      </div>{" "}
                      <div class="place-cap">
                        <div class="place-cap-top">
                          <span>
                            {" "}
                            <i class="fas fa-star"> </i>{" "}
                            <span>
                              {" "}
                              Recommendation: {hotel.recommendation}{" "}
                            </span>{" "}
                          </span>{" "}
                          <a href="#">
                            {" "}
                            {/* <h3> {hotel.title} </h3>{" "} */}{" "}
                          </a>{" "}
                          <p class="dolor">
                            {" "}
                            Recommended Price Rs. {hotel.expenses}{" "}
                            <span span span>
                              {" "}
                              / Per Person{" "}
                            </span>{" "}
                            for this place.{" "}
                          </p>{" "}
                        </div>{" "}
                        <div class="place-cap-bottom">
                          <ul>
                            <li>
                              {" "}
                              <i class="fas fa-map-marker-alt"> </i>{" "}
                              {hotel.city}{" "}
                            </li>{" "}
                          </ul>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  );
                })}
                ;{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        {/* <!--================ Blog Area end =================--> */}{" "}
      </main>{" "}
      {/* <!--================Blog Area =================--> */}{" "}
    </div>
  );
}

export default SingleEvent;
