import Head from "next/head";

export default function Home() {
  return (
    <main>
      <div className="preloader">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div id="main-wrapper">
        <header id="header" className="sticky-top">
          <nav className="primary-menu navbar navbar-expand-lg bg-dark navbar-text-light border-bottom-0">
            <div className="container-fluid position-relative h-100 flex-lg-column pl-3 px-lg-3 pt-lg-3 pb-lg-2">
              <a href="/" className="mb-lg-auto mt-lg-4">
                <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
                  <img
                    className="img-fluid rounded-pill d-block"
                    src="/images/profile.png"
                    title="I'm Simone"
                    alt=""
                  />
                </span>
                <h1 className="text-5 text-white text-center mb-0 d-lg-block">
                  Davilson de Castro
                </h1>
              </a>
              <div
                id="header-nav"
                className="collapse navbar-collapse w-100 my-lg-auto"
              >
                <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll active" href="#home">
                      Início
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#about">
                      Sobre mim
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#services">
                      O que eu faço
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#resume">
                      Resumo
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#portfolio">
                      Portfólio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#contact">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ml-auto ml-lg-0 mb-n1 d-flex">
                <li className="social-icons-facebook">
                  <a
                    data-toggle="tooltip"
                    href="http://www.facebook.com/"
                    target="_blank"
                    title=""
                    data-original-title="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social-icons-twitter">
                  <a
                    data-toggle="tooltip"
                    href="http://www.twitter.com/"
                    target="_blank"
                    title=""
                    data-original-title="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-icons-dribbble">
                  <a
                    data-toggle="tooltip"
                    href="http://www.dribbble.com/"
                    target="_blank"
                    title=""
                    data-original-title="Dribbble"
                  >
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li className="social-icons-github">
                  <a
                    data-toggle="tooltip"
                    href="http://www.google.com/"
                    target="_blank"
                    title=""
                    data-original-title="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#header-nav"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </header>
        <div id="content" role="main">
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
          <section id="about" className="section">
            <div className="container px-lg-5">
              <div className="position-relative d-flex text-center mb-5">
                <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">
                  Sobre mim
                </h2>
                <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
                  Sobre mim
                  <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
                </p>
              </div>
              <div className="row">
                <div className="col-lg-8 text-center text-lg-left">
                  <h2 className="text-7 font-weight-600 mb-3">
                    {"Sou "}
                    <span className="text-primary">Davilson,</span>
                    {" Full-stack Developer"}
                  </h2>
                  <p>
                    Graduado em Sistemas de Informação no Centro Universitário
                    das Faculdades Associadas de Ensino — UNIFAE, sou apaixonado
                    por programação e atuo profissionalmente na área há pelo
                    menos 8 anos. Atualmente trabalho em projetos que utilizam
                    PHP, Node.js, React.js/React Native, HTML5, CSS3, MongoDB,
                    MySQL, Bootstrap e Material-Ui.
                  </p>
                </div>
                <div className="col-lg-4 mt-5 mt-lg-0">
                  <div className="pl-4">
                    <ul className="list-style-2">
                      <li>
                        <span className="font-weight-600 mr-2">Nome:</span>
                        Davilson de Castro
                      </li>
                      <li>
                        <span className="font-weight-600 mr-2">Idade:</span>
                        29 anos
                      </li>
                      <li>
                        <span className="font-weight-600 mr-2">E-mail:</span>
                        <a href="mailto:davilsondecastro@gmail.com">
                          davilsondecastro@gmail.com
                        </a>
                      </li>
                      <li>
                        <span className="font-weight-600 mr-2">Github:</span>
                        <a href="https://github.com/davilson" target="_blank">
                          @davilson
                        </a>
                      </li>
                      <li>
                        <span className="font-weight-600 mr-2">Linkedin:</span>
                        <a
                          href="https://www.linkedin.com/in/davilsondecastro"
                          target="_blank"
                        >
                          @davilsondecastro
                        </a>
                      </li>
                    </ul>
                    <a
                      href="/"
                      className="btn btn-primary rounded-pill smooth-scroll"
                    >
                      Baixar currículo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="services" className="section bg-light">
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
                          Lisque persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure.
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
                          Lisque persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure.
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
                          Lisque persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure.
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
                          Lisque persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure.
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
                          Lisque persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure.
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
                          Lisque persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="resume" className="section">
            <div className="container px-lg-5">
              <div className="position-relative d-flex text-center mb-5">
                <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">
                  Summary
                </h2>
                <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
                  Resume
                  <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
                </p>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h2 className="text-6 font-weight-600 mb-4">My Education</h2>
                  <div className="bg-white border rounded p-4 mb-4">
                    <p className="badge badge-primary text-2 font-weight-400">
                      2000 - 2004
                    </p>
                    <h3 className="text-5">Computer Science</h3>
                    <p className="text-danger">International University</p>
                    <p className="mb-0">
                      Lisque persius interesset his et, in quot quidam
                      persequeris vim, ad mea essent possim iriure.
                    </p>
                  </div>
                  <div className="bg-white border rounded p-4 mb-4">
                    <p className="badge badge-primary text-2 font-weight-400">
                      2005 - 2008
                    </p>
                    <h3 className="text-5">Bachelor Degree</h3>
                    <p className="text-danger">University of California</p>
                    <p className="mb-0">
                      Lisque persius interesset his et, in quot quidam
                      persequeris vim, ad mea essent possim iriure.
                    </p>
                  </div>
                  <div className="bg-white border rounded p-4 mb-4">
                    <p className="badge badge-primary text-2 font-weight-400">
                      2009 - 2012
                    </p>
                    <h3 className="text-5">Master Degree</h3>
                    <p className="text-danger">Harvard University</p>
                    <p className="mb-0">
                      Lisque persius interesset his et, in quot quidam
                      persequeris vim, ad mea essent possim iriure.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <h2 className="text-6 font-weight-600 mb-4">My Experience</h2>
                  <div className="bg-white border rounded p-4 mb-4">
                    <p className="badge badge-primary text-2 font-weight-400">
                      2012 - 2013
                    </p>
                    <h3 className="text-5">Jr. UI UX Designer</h3>
                    <p className="text-danger">Themeforest</p>
                    <p className="mb-0">
                      Lisque persius interesset his et, in quot quidam
                      persequeris vim, ad mea essent possim iriure.
                    </p>
                  </div>
                  <div className="bg-white border rounded p-4 mb-4">
                    <p className="badge badge-primary text-2 font-weight-400">
                      2014 - 2016
                    </p>
                    <h3 className="text-5">Jr. Product Designer</h3>
                    <p className="text-danger">Dribbble</p>
                    <p className="mb-0">
                      Lisque persius interesset his et, in quot quidam
                      persequeris vim, ad mea essent possim iriure.
                    </p>
                  </div>
                  <div className="bg-white border rounded p-4 mb-4">
                    <p className="badge badge-primary text-2 font-weight-400">
                      2017 - 2019
                    </p>
                    <h3 className="text-5">Product Designer</h3>
                    <p className="text-danger">Adobe</p>
                    <p className="mb-0">
                      Lisque persius interesset his et, in quot quidam
                      persequeris vim, ad mea essent possim iriure.
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="text-6 font-weight-600 mt-4 mb-4">My Skills</h2>
              <div className="row">
                <div className="col-md-6">
                  <p className="text-dark font-weight-500 text-left mb-2">
                    Web Design <span className="float-right">65%</span>
                  </p>
                  <div className="progress progress-sm mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "65%" }}
                      aria-valuenow={65}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <p className="text-dark font-weight-500 text-left mb-2">
                    HTML/CSS <span className="float-right">95%</span>
                  </p>
                  <div className="progress progress-sm mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <p className="text-dark font-weight-500 text-left mb-2">
                    JavaScript <span className="float-right">80%</span>
                  </p>
                  <div className="progress progress-sm mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <p className="text-dark font-weight-500 text-left mb-2">
                    React JS <span className="float-right">70%</span>
                  </p>
                  <div className="progress progress-sm mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <p className="text-dark font-weight-500 text-left mb-2">
                    Angular Js <span className="float-right">60%</span>
                  </p>
                  <div className="progress progress-sm mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <p className="text-dark font-weight-500 text-left mb-2">
                    Bootstrap <span className="float-right">99%</span>
                  </p>
                  <div className="progress progress-sm mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "99%" }}
                      aria-valuenow={99}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5">
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-pill shadow-none"
                >
                  Download CV{" "}
                  <span className="ml-1">
                    <i className="fas fa-download"></i>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <section id="portfolio" className="section bg-light">
            <div className="container px-lg-5">
              <div className="position-relative d-flex text-center mb-5">
                <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">
                  Portfolio
                </h2>
                <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
                  My Work
                  <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
                </p>
              </div>
              <ul className="portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-4">
                <li className="nav-item">
                  {" "}
                  <a data-filter="*" className="nav-link active" href="">
                    All
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a data-filter=".design" href="" className="nav-link">
                    Design
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a data-filter=".brand" href="" className="nav-link">
                    Brand
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a data-filter=".photos" href="" className="nav-link">
                    Photos
                  </a>
                </li>
              </ul>
              <div className="portfolio popup-ajax-gallery">
                <div className="row portfolio-filter">
                  <div className="col-sm-6 col-lg-4 brand">
                    <div className="portfolio-box rounded my-3">
                      <div className="portfolio-img rounded">
                        <img
                          className="img-fluid d-block"
                          src="images/projects/project-1.jpg"
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          {" "}
                          <a
                            className="popup-ajax stretched-link"
                            href="ajax/portfolio-ajax-project-1.html"
                          ></a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white font-weight-400">
                              Project Title
                            </h5>
                            <span className="text-light">Category</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 design">
                    <div className="portfolio-box rounded my-3">
                      <div className="portfolio-img rounded">
                        <img
                          className="img-fluid d-block"
                          src="images/projects/project-2.jpg"
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          {" "}
                          <a
                            className="popup-ajax stretched-link"
                            href="ajax/portfolio-ajax-project-2.html"
                          ></a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white font-weight-400">
                              Project Title
                            </h5>
                            <span className="text-light">Category</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 artwork photos">
                    <div className="portfolio-box rounded my-3">
                      <div className="portfolio-img rounded">
                        <img
                          className="img-fluid d-block"
                          src="images/projects/project-3.jpg"
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          {" "}
                          <a
                            className="popup-ajax stretched-link"
                            href="ajax/portfolio-ajax-project-3.html"
                          ></a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white font-weight-400">
                              Project Title
                            </h5>
                            <span className="text-light">Category</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 artwork brand photos">
                    <div className="portfolio-box rounded my-3">
                      <div className="portfolio-img rounded">
                        <img
                          className="img-fluid d-block"
                          src="images/projects/project-4.jpg"
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          {" "}
                          <a
                            className="popup-ajax stretched-link"
                            href="ajax/portfolio-ajax-project-4.html"
                          ></a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white font-weight-400">
                              Project Title
                            </h5>
                            <span className="text-light">Category</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 design">
                    <div className="portfolio-box rounded my-3">
                      <div className="portfolio-img rounded">
                        <img
                          className="img-fluid d-block"
                          src="images/projects/project-5.jpg"
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          {" "}
                          <a
                            className="popup-ajax stretched-link"
                            href="ajax/portfolio-ajax-project-5.html"
                          ></a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white font-weight-400">
                              Project Title
                            </h5>
                            <span className="text-light">Category</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 brand">
                    <div className="portfolio-box rounded my-3">
                      <div className="portfolio-img rounded">
                        <img
                          className="img-fluid d-block"
                          src="images/projects/project-6.jpg"
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          {" "}
                          <a
                            className="popup-ajax stretched-link"
                            href="ajax/portfolio-ajax-project-6.html"
                          ></a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white font-weight-400">
                              Project Title
                            </h5>
                            <span className="text-light">Category</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 design photos">
                    <div className="portfolio-box rounded my-3">
                      <div className="portfolio-img rounded">
                        <img
                          className="img-fluid d-block"
                          src="images/projects/project-7.jpg"
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          {" "}
                          <a
                            className="popup-ajax stretched-link"
                            href="ajax/portfolio-ajax-project-7.html"
                          ></a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white font-weight-400">
                              Project Title
                            </h5>
                            <span className="text-light">Category</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
        </div>
        <footer id="footer" className="section">
          <div className="container px-lg-5">
            <div className="row">
              <div className="col-lg-6 text-center text-lg-left">
                <p className="mb-3 mb-lg-0">
                  Copyright © 2020 <a href="#">Simone</a>. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6">
                <ul className="nav nav-separator justify-content-center justify-content-lg-end">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#terms-policy"
                      href="#"
                    >
                      Terms & Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#disclaimer"
                      href="#"
                    >
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <a
        id="back-to-top"
        className="rounded-circle"
        data-toggle="tooltip"
        title="Back to Top"
        href="javascript:void(0)"
      >
        <i className="fa fa-chevron-up"></i>
      </a>
      <div
        id="terms-policy"
        className="modal fade"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Terms & Policy</h5>
              <button
                type="button"
                className="close font-weight-400"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <span aria-hidden="true">&times;</span>{" "}
              </button>
            </div>
            <div className="modal-body p-4">
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <h3 className="mb-3 mt-4 mt-4">Terms of Use</h3>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Simply
                dummy text of the printing and typesetting industry.
              </p>
              <h5 className="text-4 mt-4">
                Part I – Information Simone collects and controls
              </h5>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <h5 className="text-4 mt-4">
                Part II – Information that Simone processes on your behalf
              </h5>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <h5 className="text-4 mt-4">Part III – General</h5>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Lorem
                Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <h3 className="mb-3 mt-4">Privacy Policy</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <ol className="line-height-5">
                <li>
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </li>
                <li>
                  Quidam lisque persius interesset his et, Lisque persius
                  interesset his et, in quot quidam persequeris vim, ad mea
                  essent possim iriure.
                </li>
                <li>
                  In quot quidam persequeris vim, ad mea essent possim iriure.
                  Quidam lisque persius interesset his et.
                </li>
                <li>
                  Quidam lisque persius interesset his et, Lisque persius
                  interesset his et.
                </li>
                <li>
                  Interesset his et, Lisque persius interesset his et, in quot
                  quidam persequeris vim, ad mea essent possim iriure.
                </li>
                <li>
                  Persius interesset his et, Lisque persius interesset his et,
                  in quot quidam persequeris vim, ad mea essent possim iriure.
                </li>
                <li>
                  Quot quidam persequeris vim Quidam lisque persius interesset
                  his et, Lisque persius interesset his et, in quot quidam
                  persequeris vim, ad mea essent possim iriure.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div
        id="disclaimer"
        className="modal fade"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Copyright & Disclaimer</h5>
              <button
                type="button"
                className="close font-weight-400"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <span aria-hidden="true">&times;</span>{" "}
              </button>
            </div>
            <div className="modal-body p-4">
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.{" "}
              </p>
              <ul className="line-height-5">
                <li>
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </li>
                <li>
                  Quidam lisque persius interesset his et, Lisque persius
                  interesset his et, in quot quidam persequeris vim, ad mea
                  essent possim iriure.
                </li>
                <li>
                  In quot quidam persequeris vim, ad mea essent possim iriure.
                  Quidam lisque persius interesset his et.
                </li>
                <li>
                  Quidam lisque persius interesset his et, Lisque persius
                  interesset his et.
                </li>
                <li>
                  Interesset his et, Lisque persius interesset his et, in quot
                  quidam persequeris vim, ad mea essent possim iriure.
                </li>
                <li>
                  Persius interesset his et, Lisque persius interesset his et,
                  in quot quidam persequeris vim, ad mea essent possim iriure.
                </li>
                <li>
                  Quot quidam persequeris vim Quidam lisque persius interesset
                  his et, Lisque persius interesset his et, in quot quidam
                  persequeris vim, ad mea essent possim iriure.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
