import React from "react";

import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [companyObject, setCompany] = useState({});

  const id = 1;
  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/company/${id}`).then((response) => {
      setCompany(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div class="support-company-area mt-4 fix">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-6 col-lg-6">
                <div class="right-caption">
                  {" "}
                  {/* <!-- Section Tittle --> */}{" "}
                  <div class="section-tittle section-tittle2">
                    <span> About Our Company </span>{" "}
                    <h2>
                      We are {companyObject.name} <br />
                      Support Company{" "}
                    </h2>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* <!-- Support Company End--> */} {/* <!-- Our Services Start --> */}{" "}
        <div class="our-services">
          <div class="container">
            <div class="row d-flex justify-contnet-center">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <div class="single-services text-center mb-30">
                  <div class="services-ion">
                    <span class="flaticon-tour"> </span>{" "}
                  </div>{" "}
                  <div class="services-cap">
                    <h5>{companyObject.email} </h5>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <div class="single-services text-center mb-30">
                  <div class="services-ion">
                    <span class="flaticon-pay"> </span>{" "}
                  </div>{" "}
                  <div class="services-cap">
                    <h5>{companyObject.address} </h5>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <div class="single-services text-center mb-30">
                  <div class="services-ion">
                    <span class="flaticon-experience"> </span>{" "}
                  </div>{" "}
                  <div class="services-cap">
                    <h5>{companyObject.phone} </h5>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <div class="single-services text-center mb-30">
                  <div class="services-ion">
                    <span class="flaticon-good"> </span>{" "}
                  </div>{" "}
                  <div class="services-cap">
                    <h5>{companyObject.name} </h5>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* <!-- Our Services End --> */}
        {/* <!-- Testimonial Start --> */}{" "}
        <div class="testimonial-area testimonial-padding">
          <div class="container ">
            <div class="row d-flex justify-content-center">
              <div class="col-xl-11 col-lg-11 col-md-9">
                <div class="h1-testimonial-active">
                  {" "}
                  {/* <!-- Single Testimonial --> */}{" "}
                  <div class="single-testimonial text-center">
                    {" "}
                    {/* <!-- Testimonial Content --> */}{" "}
                    <div class="testimonial-caption ">
                      <div class="testimonial-top-cap">
                        <img src="assets/img/icon/testimonial.png" alt="" />
                        <p>{companyObject.vision} </p>{" "}
                      </div>{" "}
                      {/* <!-- founder --> */}{" "}
                      <div class="testimonial-founder d-flex align-items-center justify-content-center">
                        <div class="founder-img">
                          <img
                            src="assets/img/testmonial/Homepage_testi.png"
                            alt=""
                          />
                        </div>{" "}
                        <div class="founder-text founder-text2">
                          <span> {companyObject.founderName} </span>{" "}
                          <p> Founder </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* <!-- Testimonial End --> */}{" "}
      </main>{" "}
      <Footer />
    </div>
  );
}

export default About;
