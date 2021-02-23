import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-light">
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">
            Contact
          </h2>
          <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
            Get in Touch
            <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-left mt-5 mt-md-0">
            <h2 className="mb-3 text-5 text-uppercase">Address</h2>
            <p className="text-3 mb-4">
              4th Floor, Plot No.22,
              <br />
              145 Murphy Canyon Rd.
              <br />
              San Diego CA 2028
            </p>
            <p className="text-3 mb-1">
              <span className="text-primary text-4 mr-2">
                <i className="fas fa-phone"></i>
              </span>
              (060) 444 434 444
            </p>
            <p className="text-3 mb-1">
              <span className="text-primary text-4 mr-2">
                <i className="fas fa-fax"></i>
              </span>
              (060) 555 545 555
            </p>
            <p className="text-3 mb-4">
              <span className="text-primary text-4 mr-2">
                <i className="fas fa-envelope"></i>
              </span>
              chat@simone.com
            </p>
            <h2 className="mb-3 text-5 text-uppercase">Follow Me</h2>
            <ul className="social-icons ml-md-n2 justify-content-center justify-content-md-start">
              <li className="social-icons-dribbble">
                <a
                  data-toggle="tooltip"
                  href="http://www.dribbble.com/harnishdesign/"
                  target="_blank"
                  title=""
                  data-original-title="Dribbble"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
              <li className="social-icons-twitter">
                <a
                  data-toggle="tooltip"
                  href="https://twitter.com/harnishdesign/"
                  target="_blank"
                  title=""
                  data-original-title="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons-facebook">
                <a
                  data-toggle="tooltip"
                  href="http://www.facebook.com/harnishdesign/"
                  target="_blank"
                  title=""
                  data-original-title="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="social-icons-google">
                <a
                  data-toggle="tooltip"
                  href="http://www.google.com/"
                  target="_blank"
                  title=""
                  data-original-title="Google"
                >
                  <i className="fab fa-google"></i>
                </a>
              </li>
              <li className="social-icons-github">
                <a
                  data-toggle="tooltip"
                  href="http://www.github.com/"
                  target="_blank"
                  title=""
                  data-original-title="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-8 col-xl-9 order-0 order-md-1">
            <h2 className="mb-3 text-5 text-uppercase text-center text-md-left">
              Send us a note
            </h2>
            <form id="contact-form" action="php/mail.php" method="post">
              <div className="row">
                <div className="col-xl-6">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      required
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      required
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="form-message"
                  className="form-control"
                  rows={5}
                  required
                  placeholder="Tell us more about your needs........"
                ></textarea>
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-primary rounded-pill d-inline-flex"
                  type="submit"
                >
                  Send Message
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
