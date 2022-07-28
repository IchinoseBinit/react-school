import React from "react";
import Header from "./header";
import Footer from "./footer";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import axios from "axios";
import { useState, useEffect } from "react";

function AddEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [placeList, setPlace] = useState([]);
  const [venue, setVenue] = useState("");

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
    formData.append("venue", venue);
    axios
      .post("http://127.0.0.1:3001/event", formData, {
        headers: {
          accessTokenFromFrontend: sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert("Event added successfully");
          const event = response.data.title + " event has been added";
          axios
            .post(
              "http://127.0.0.1:3001/notification",
              {
                event: event,
              },
              {
                headers: {
                  accessTokenFromFrontend:
                    sessionStorage.getItem("accessToken"),
                },
              }
            )
            .then((response) => {
              if (response.data.error) {
                alert(response.data.error);
              } else {
                alert("Notification sent");
              }
            });
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
              Add Event{" "}
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
                        setVenue(event.target.value);
                      }}
                      class="form-control valid"
                      name="venue"
                      id="venue"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Venue..'"
                      placeholder="Venue...."
                    />
                  </div>{" "}
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
                </div>{" "}
              </div>{" "}
              <div class="form-group mt-3">
                <button
                  style={{ width: "100%" }}
                  onClick={event}
                  class="button button-contactForm boxed-btn"
                >
                  Add Event{" "}
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

export default AddEvent;
