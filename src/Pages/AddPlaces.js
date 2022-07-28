import React from "react";
import Header from "./header";
import Footer from "./footer";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import axios from "axios";
import { useState, useEffect } from "react";

function AddPlaces() {
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [climate, setClimate] = useState("");
  const [hotelAvailability, setHotelAvailability] = useState("");
  const [road, setRoad] = useState("");
  const [distanceFromKathmandu, setDisTanceFromKathmandu] = useState("");
  const [image, setImage] = useState("");

  const [placeList, setPlace] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3001/places").then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setPlace(response.data);
      }
    });
  }, []);

  const place = (e) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("city", city);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("postalCode", postalCode);
    formData.append("climate", climate);
    formData.append("hotelAvailability", hotelAvailability);
    formData.append("road", road);
    formData.append("distanceFromKathmandu", distanceFromKathmandu);
    axios
      .post("http://127.0.0.1:3001/places", formData, {
        headers: {
          accessTokenFromFrontend: sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert("Place added successfully");
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
              Add Place{" "}
            </h2>{" "}
          </div>{" "}
          <div style={{ margin: "0 auto" }} class="col-lg-6">
            <form class="form-contact contact_form" id="contactForm">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setCity(event.target.value);
                      }}
                      class="form-control valid"
                      name="title"
                      id="title"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'City Name'"
                      placeholder="City Name"
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
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setAddress(event.target.value);
                      }}
                      class="form-control valid"
                      name="venue"
                      id="venue"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Address..'"
                      placeholder="Address...."
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setPostalCode(event.target.value);
                      }}
                      class="form-control valid"
                      name="title"
                      id="title"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Postal Code'"
                      placeholder="Postal Code"
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setClimate(event.target.value);
                      }}
                      class="form-control valid"
                      name="title"
                      id="title"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Climate Condition'"
                      placeholder="Climate Condition"
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setHotelAvailability(event.target.value);
                      }}
                      class="form-control valid"
                      name="title"
                      id="title"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Hotel Availability/'"
                      placeholder="Hotel Availability"
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setRoad(event.target.value);
                      }}
                      class="form-control valid"
                      name="title"
                      id="title"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Describe Road Condition'"
                      placeholder="Describe Road Condition"
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setDisTanceFromKathmandu(event.target.value);
                      }}
                      class="form-control valid"
                      name="distance"
                      id="title"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Distance From Kathmandu'"
                      placeholder="Distance From Kathmandu"
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setImage(event.target.files[0]);
                      }}
                      class="form-control valid"
                      name="image"
                      id="image"
                      type="file"
                      onfocus="this.placeholder = ''"
                    />
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div class="form-group mt-3">
                <button
                  style={{ width: "100%" }}
                  onClick={place}
                  class="button button-contactForm boxed-btn"
                >
                  Add Place{" "}
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

export default AddPlaces;
