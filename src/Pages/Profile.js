import React from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { useContext } from "react";

function Profile() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authState } = useContext(AuthContext);
  const updateUser = (e) => {
    const data = {
      email: email,
      username: username,
      password: password,
    };
    axios
      .post("http://127.0.0.1:3001/users/update", data, {
        headers: {
          accessTokenFromFrontend: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert("User updated successfully. Login again to see changes.");
        }
      });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [profile, setProfile] = useState({});

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/users/profile").then((response) => {
      // setProfile(response.data);
      // alert("Userprofile" + response.data.username);
    });
  }, []);

  return (
    <div>
      <Header /> {/* <!-- Preloader Start--> */}{" "}
      {/* <!--================Blog Area =================--> */}{" "}
      <section class="blog_area mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="blog_right_sidebar mt-4">
                <aside class="single_sidebar_widget post_category_widget">
                  <h4 class="widget_title"> User Details </h4>{" "}
                  <ul class="list cat-list ">
                    <li>
                      <a href="#" class="d-flex">
                        <p>
                          <img src="assets/img/post/post_1.png" alt="post" />{" "}
                        </p>{" "}
                      </a>{" "}
                    </li>{" "}
                    <li>
                      <a href="#" class="d-flex">
                        <p>
                          {" "}
                          <b> Username: {authState.username} </b>{" "}
                        </p>{" "}
                      </a>{" "}
                      <a href="#" class="d-flex">
                        <p>
                          {" "}
                          <b> Email Address: {authState.email} </b>{" "}
                        </p>{" "}
                      </a>{" "}
                      <a href="#" class="d-flex">
                        <p>
                          {" "}
                          <b> Password: {authState.password} </b>{" "}
                        </p>{" "}
                      </a>{" "}
                    </li>{" "}
                  </ul>{" "}
                  <ul style={{ marginTop: "100px" }}>
                    <li> Update Details </li>{" "}
                    <li>
                      <div style={{ margin: "0 auto" }} class="col-lg-12 mt-5">
                        <form
                          class="form-contact contact_form"
                          id="contactForm"
                        >
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
                              onClick={() => {
                                updateUser();
                              }}
                              style={{ width: "100%" }}
                              class="button button-contactForm boxed-btn"
                            >
                              Update{" "}
                            </button>{" "}
                          </div>{" "}
                        </form>{" "}
                      </div>{" "}
                    </li>{" "}
                  </ul>{" "}
                </aside>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <Footer /> {/* <!--================Blog Area =================--> */}{" "}
    </div>
  );
}

export default Profile;
