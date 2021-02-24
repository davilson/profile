import React from "react";

import { socialList } from "../../utils";

const SidebarLeft: React.FC = () => {
  return (
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
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#skills">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#resume">
                  Experiência/Formação
                </a>
              </li>
              {/*
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#portfolio">
                    Portfólio
                  </a>
                </li>
              */}
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#contact">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ml-auto ml-lg-0 mb-n1 d-flex">
            {socialList.map((i) => (
              <li className="" key={i.title}>
                <a
                  data-toggle="tooltip"
                  href={i.link}
                  target="_blank"
                  title={i.title}
                  data-original-title={i.title}
                >
                  <i className={i.icon}></i>
                </a>
              </li>
            ))}
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
  );
};

export default SidebarLeft;
