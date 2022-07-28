import React from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, useNavigate } from "react-router-dom";

function Hotel() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hotelList, setHotel] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/hotel").then((response) => {
      setHotel(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        {" "}
        {/* <!-- slider Area Start--> */} {/* <!-- slider Area End--> */}{" "}
        {/* <!-- Favourite Places Start/ --> */}{" "}
        <div class="favourite-place">
          <div class="container">
            {" "}
            {/* <!-- Section Tittle --> */}{" "}
            <div class="row">
              <div class="col-lg-12">
                <div class="section-tittle text-center">
                  <span>Enjoy your day </span>
                  <h2> Our Best Hotels</h2>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="row">
              {" "}
              {hotelList.map((hotel, key) => {
                return (
                  <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="single-place mb-30">
                      <div class="place-img">
                        <img
                          src={`http://127.0.0.1:3001/${hotel.image}`}
                          alt=""
                        />
                      </div>{" "}
                      <div class="place-cap">
                        <div class="place-cap-top">
                          <span>
                            {" "}
                            <span>Expenses: {hotel.expenses} </span>{" "}
                          </span>{" "}
                          <a href="#">
                            {" "}
                            <h3> {hotel.title} </h3>{" "}
                          </a>{" "}
                          <p class="dolor">
                            {" "}
                            Rs.{hotel.expenses} <span> / Per Person</span>{" "}
                          </p>{" "}
                        </div>{" "}
                        <div class="place-cap-bottom">
                          <ul>
                            <li>
                              {" "}
                              <i class="far fa-clock"> </i>
                              {hotel.createdAt}{" "}
                            </li>{" "}
                            <li>
                              {" "}
                              <i class="fas fa-map-marker-alt"> </i>
                              {hotel.venue}{" "}
                            </li>{" "}
                          </ul>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                );
              })}
              ;{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* <!-- Favourite Places End --> */}{" "}
        {/* <!-- Pagination-area Start --> */}{" "}
        <div class="pagination-area pb-100 text-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="single-wrap d-flex justify-content-center">
                  <nav ariaLabel="Page navigation example">
                    <ul class="pagination justify-content-start">
                      <li class="page-item">
                        {" "}
                        <a class="page-link" href="#">
                          {" "}
                          <span class="flaticon-arrow roted left-arrow">
                            {" "}
                          </span>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li class="page-item active">
                        {" "}
                        <a class="page-link" href="#">
                          {" "}
                          01{" "}
                        </a>{" "}
                      </li>{" "}
                      <li class="page-item">
                        {" "}
                        <a class="page-link" href="#">
                          {" "}
                          02{" "}
                        </a>{" "}
                      </li>{" "}
                      <li class="page-item">
                        {" "}
                        <a class="page-link" href="#">
                          {" "}
                          03{" "}
                        </a>{" "}
                      </li>{" "}
                      <li class="page-item">
                        {" "}
                        <a class="page-link" href="#">
                          {" "}
                          <span class="flaticon-arrow right-arrow"> </span>{" "}
                        </a>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </nav>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* <!-- Pagination-area End --> */}{" "}
      </main>{" "}
    </div>
  );
}

export default Hotel;
