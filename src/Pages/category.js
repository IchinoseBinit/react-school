import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Category() {
  const [categoriesList, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);
  return (
    <div>
      <Header />
      <main>
        {/* <!-- About US Start --> */}
        <div class="about-area2 gray-bg pt-60 pb-60">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="whats-news-wrapper">
                  {/* <!-- Heading & Nav Button --> */}
                  <div class="row justify-content-between align-items-end mb-15">
                    <div class="col-xl-4">
                      <div class="section-tittle mb-30">
                        <h3>Our Categories</h3>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Tab content --> */}
                  <div class="row">
                    <div class="col-12">
                      {/* <!-- Nav Card --> */}
                      <div class="tab-content" id="nav-tabContent">
                        {/* <!-- card one --> */}
                        <div
                          class="tab-pane fade show active"
                          id="nav-home"
                          role="tabpanel"
                          ariaLabelledby="nav-home-tab"
                        >
                          <div class="row">
                            {categoriesList.map((category, value) => {
                              return (
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                  <div class="whats-news-single mb-40 mb-40">
                                    <div class="whates-img">
                                      <img
                                        src="assets/img/gallery/whats_news_details1.png"
                                        alt=""
                                      />
                                    </div>
                                    <div class="whates-caption whates-caption2">
                                      <h4>
                                        <a href="#">{category.title}</a>
                                      </h4>
                                      <span>
                                        by Alice cloe - {category.createdAt}
                                      </span>
                                      <p>{category.description}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            ;
                          </div>
                        </div>
                        {/* <!-- Card two --> */}
                        <div
                          class="tab-pane fade"
                          id="nav-profile"
                          role="tabpanel"
                          ariaLabelledby="nav-profile-tab"
                        >
                          <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details4.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details6.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details5.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details4.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details5.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details1.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Card three --> */}
                        <div
                          class="tab-pane fade"
                          id="nav-contact"
                          role="tabpanel"
                          ariaLabelledby="nav-contact-tab"
                        >
                          <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details3.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details5.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details1.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details4.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details3.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details6.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- card fure --> */}
                        <div
                          class="tab-pane fade"
                          id="nav-last"
                          role="tabpanel"
                          ariaLabelledby="nav-last-tab"
                        >
                          <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details6.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details2.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details4.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details2.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details5.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details1.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- card Five --> */}
                        <div
                          class="tab-pane fade"
                          id="nav-nav-Sport"
                          role="tabpanel"
                          ariaLabelledby="nav-Sports"
                        >
                          <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details1.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details2.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details3.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details4.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details5.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                              <div class="whats-news-single mb-40 mb-40">
                                <div class="whates-img">
                                  <img
                                    src="assets/img/gallery/whats_news_details6.png"
                                    alt=""
                                  />
                                </div>
                                <div class="whates-caption whates-caption2">
                                  <h4>
                                    <a href="#">
                                      Secretart for Economic Air plane that
                                      looks like
                                    </a>
                                  </h4>
                                  <span>by Alice cloe - Jun 19, 2020</span>
                                  <p>
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and singer Jennifer Lopez.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Nav Card --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About US End --> */}
      </main>

      <Footer />
    </div>
  );
}

export default Category;
