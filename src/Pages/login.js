import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authState, setAuthState } = useContext(AuthContext);
  console.log(username, password);
  const login = () => {
    const data = { username: username, password: password };
    axios
      .post("http://127.0.0.1:3001/users/login_user", data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          // first one is name and second is access token received
          localStorage.setItem("accessToken", response.data);
          setAuthState({ ...authState, status: true });
          navigate("/home");
          window.location.reload(true);
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
              Login{" "}
            </h2>{" "}
          </div>{" "}
          <div style={{ margin: "0 auto" }} class="col-lg-6">
            <form class="form-contact contact_form">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                      name="username"
                      id="username"
                      type="username"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Username'"
                      placeholder="Enter Username"
                    />
                  </div>{" "}
                </div>{" "}
                <div class="col-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      name="password"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
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
                  onClick={() => {
                    login();
                  }}
                  class="button button-contactForm boxed-btn"
                >
                  Login{" "}
                </button>{" "}
              </div>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Footer />
    </div>
  );
}
export default Login;
