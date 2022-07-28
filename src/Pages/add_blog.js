import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function AddBlog() {
  const [blogListShow, setListBlog] = useState([]);
  const values = {
    title: "",
    description: "",
    user: "",
  };

  const submit = (data) => {
    axios.post("http://127.0.0.1:3001/blogs/insert",data).then((response) => {
      setListBlog(response.data);
    });
  };

  const validation = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    user: Yup.string().required(),
  });

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
              Add New Blog
            </h2>
          </div>
          <div style={{ margin: "0 auto" }} class="col-lg-6">
            <Formik
              initialValues={values}
              onSubmit={submit}
              validationSchema={validation}
            >
              <form
                class="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                novalidate="novalidate"
              >
                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <ErrorMessage name="title" component="span" />
                      <Field
                        class="form-control valid"
                        name="title"
                        id="title"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter title here...'"
                        placeholder="Enter title here.."
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <ErrorMessage name="description" component="span" />
                      <Field
                        class="form-control w-100"
                        name="description"
                        id="description"
                        cols="30"
                        rows="9"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Description'"
                        placeholder=" Enter Description"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <ErrorMessage name="user" component="span" />
                      <Field
                        class="form-control valid"
                        name="user"
                        id="user"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter user here...'"
                        placeholder="Enter user here.."
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <button
                    style={{ width: "100%" }}
                    type="submit"
                    class="button button-contactForm boxed-btn"
                  >
                    Add Blog
                  </button>
                </div>
              </form>
            </Formik>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AddBlog;
