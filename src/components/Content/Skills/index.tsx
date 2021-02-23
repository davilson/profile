import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section bg-light">
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">
            Services
          </h2>
          <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                    {" "}
                    <i className="fas fa-palette"></i>{" "}
                  </div>
                  <h3>Graphic Design</h3>
                  <p className="mb-0">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                    {" "}
                    <i className="fas fa-desktop"></i>
                  </div>
                  <h3>Web Design</h3>
                  <p className="mb-0">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                    {" "}
                    <i className="fas fa-pencil-ruler"></i>{" "}
                  </div>
                  <h3>UI/UX Design</h3>
                  <p className="mb-0">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                    {" "}
                    <i className="fas fa-paint-brush"></i>{" "}
                  </div>
                  <h3>App Design &amp; Develop</h3>
                  <p className="mb-0">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5 mb-md-0">
                  <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                    {" "}
                    <i className="fas fa-chart-area"></i>{" "}
                  </div>
                  <h3>Business Analysis</h3>
                  <p className="mb-0">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3 mb-0">
                  <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                    {" "}
                    <i className="fas fa-bullhorn"></i>{" "}
                  </div>
                  <h3>SEO Marketing</h3>
                  <p className="mb-0">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
