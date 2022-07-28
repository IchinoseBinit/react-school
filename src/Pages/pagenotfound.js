import React from "react";

import Header from "./header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function PageNotFound() {

  return (
    <div>
      <Header />
      <main>

      <center>
        <div class="about-details section-padding30">
          <div class="container">
            <div class="row">
              <div class="offset-xl-1 col-lg-9">
                <div class="about-details-cap">
                  <h4>Error 404: Page Not Found!</h4>
                    <h5>
                      Follow this link for help: <Link to="/" style={{color:"green"}}>Home Page</Link>
                    </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        </center>
      </main>
    </div>
  );
}

export default PageNotFound;
