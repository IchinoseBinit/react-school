import React from "react";
import Header from "./header";
import Footer from "./footer";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import axios from "axios";
import { useState, useEffect } from "react";

// const initialValues = {
//   username: "",
//   email: "",
//   password: "",
// };

// const validationSchema = Yup.object.shape({
//   username: Yup.string().required("You must enter username"),
//   password: Yup.string().required("You must enter password"),
//   email: Yup.string().required("You must enter email address"),
// });

// const submitForm = () => {
//   console.log("call axios");
// };
function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    axios
      .post("http://127.0.0.1:3001/users", {
        email: email,
        username: username,
        password: password,
      })
      .then((response) => {
        console.log("Users added.");
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
              Register{" "}
            </h2>{" "}
          </div>{" "}
          <div style={{ margin: "0 auto" }} class="col-lg-6">
            <form class="form-contact contact_form" id="contactForm">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      class="form-control valid"
                      name="email"
                      id="email"
                      type="email"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter email address'"
                      placeholder="Email"
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                      class="form-control valid"
                      name="username"
                      id="username"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Username..'"
                      placeholder="Username...."
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-12">
                  <div class="form-group">
                    <input
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      class="form-control"
                      name="password"
                      id="password"
                      type="password"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Password'"
                      placeholder="Enter Password"
                    />
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div class="form-group mt-3">
                <button
                  style={{ width: "100%" }}
                  onClick={register}
                  class="button button-contactForm boxed-btn"
                >
                  Register{" "}
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

export default Register;
