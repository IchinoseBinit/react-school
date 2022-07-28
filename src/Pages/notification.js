import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";

function Notification() {
  const [notificationState, setNotification] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/notification", {
        headers: {
          accessTokenFromFrontend: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          setNotification(response.data);
        }
      });
  });

  return (
    <div>
      <Header />
      <main>
        <div class="about-details section-padding30">
          <div class="container">
            <div class="row">
              <div class="offset-xl-1 col-lg-8">
                <div class="about-details-cap mb-50">
                  <h4>Your Notification</h4>
                  {notificationState.map((value, key) => {
                    return (
                      <p class="ml-50">
                        <span class="fa fa-check"></span> {value.message}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Notification;
