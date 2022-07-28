import React from "react";
import Header from "./header";
import Footer from "./footer";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import { useState, useContext, useEffect } from "react";

function AddHotel() {
  let { authState, setAuthState } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [placeList, setPlace] = useState([]);
  const [placeId, setPlaceId] = useState([]);
  const [expense, setExpense] = useState("");
  const [recommendation, setRecommendation] = useState("");
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/places").then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setPlace(response.data);
      }
    });
  }, []);

  const event = (e) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("recommendation", recommendation);
    formData.append("expenses", expense);
    formData.append("UserId", authState.id);
    formData.append("PlaceId", placeId);
    axios
      .post("http://127.0.0.1:3001/hotel", formData, {
        headers: {
          accessTokenFromFrontend: sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert("Hotel added successfully");
        }
      });
  };

  return (
    <div>
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2
              style={{ textAlign: "center", marginTop: "20px" }}
              class="contact-title"
            >
              Add Hotels{" "}
            </h2>{" "}
          </div>{" "}
          <div style={{ margin: "0 auto" }} class="col-lg-6">
            <form class="form-contact contact_form" id="contactForm">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setTitle(event.target.value);
                      }}
                      class="form-control valid"
                      name="title"
                      id="title"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter title'"
                      placeholder="title"
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setExpense(event.target.value);
                      }}
                      class="form-control valid"
                      name="expense"
                      id="expense"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Expenses Predict'"
                      placeholder="Enter Expenses Predict"
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setRecommendation(event.target.value);
                      }}
                      class="form-control valid"
                      name="recommendation"
                      id="recommendation"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Recommend this hotel..'"
                      placeholder="Recommend this hotel.."
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setDescription(event.target.value);
                      }}
                      class="form-control valid"
                      name="description"
                      id="description"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Description..'"
                      placeholder="Description...."
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-12">
                  <div class="form-group">
                    <label for="cars">Choose place</label>
                    <select
                      onChange={(event) => {
                        setPlaceId(event.target.value);
                      }}
                    >
                      <option> Select Place </option>;{" "}
                      {placeList.map((value, key) => {
                        return (
                          <option>
                            {" "}
                            {value.id} {value.city}{" "}
                          </option>
                        );
                      })}{" "}
                    </select>{" "}
                  </div>{" "}
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        onChange={(event) => {
                          setImage(event.target.files[0]);
                        }}
                        name="image"
                        type="file"
                      />
                    </div>{" "}
                  </div>
                </div>{" "}
              </div>{" "}
              <div class="form-group mt-3">
                <button
                  style={{ width: "100%" }}
                  onClick={event}
                  class="button button-contactForm boxed-btn"
                >
                  Add Hotel{" "}
                </button>{" "}
              </div>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>

      <Footer />
    </div>
  );
}

export default AddHotel;
