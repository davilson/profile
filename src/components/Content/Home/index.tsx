import React from "react";

const Home: React.FC = () => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark"></div>
        <div
          className="hero-bg parallax"
          style={{ backgroundImage: 'url("/images/bg-home-1.jpg")' }}
        ></div>
        <div className="hero-content section d-flex fullscreen">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <div className="typed-strings">
                  <p>Sou um dev Front-end</p>
                  <p>Sou um dev Back-end</p>
                  <p>Sou um dev Full-stack</p>
                </div>
                <p className="text-7 font-weight-500 text-white mb-2 mb-md-3">
                  Bem-vindo
                </p>
                <h2 className="text-16 font-weight-600 text-white mb-2 mb-md-3">
                  <span className="typed"></span>
                </h2>
                <p className="text-5 text-light mb-4">
                  Atualmente morando em Poços de Caldas - MG.
                </p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                >
                  Contate-me
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
          >
            <span className="animated">
              <i className="fa fa-chevron-down"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
