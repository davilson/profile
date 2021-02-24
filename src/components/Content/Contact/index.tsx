import React from "react";

import { socialList } from "../../../utils";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-light">
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">
            Contatos
          </h2>
          <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
            Contatos
            <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 order-1 order-md-0 text-center text-md-left mt-5 mt-md-0">
            <h2 className="mb-3 text-5 text-uppercase">Endereço</h2>
            <p className="text-3 mb-4">Poços de Caldas - MG, Brasil</p>
          </div>
          <div className="col-md-4 order-1 order-md-0 text-center text-md-left mt-5 mt-md-0">
            <h2 className="mb-3 text-5 text-uppercase">Celular/WhatsApp</h2>
            <p className="text-3 mb-1">
              <span className="text-primary text-4 mr-2">
                <i className="fas fa-phone"></i>
              </span>
              (019) 99163-9438
            </p>
            <br />
            <h2 className="mb-3 text-5 text-uppercase">Email</h2>
            <p className="text-3 mb-4">
              <span className="text-primary text-4 mr-2">
                <i className="fas fa-envelope"></i>
              </span>
              davilsondecastro@gmail.com
            </p>
          </div>
          <div className="col-md-4 order-1 order-md-0 text-center text-md-left mt-5 mt-md-0">
            <h2 className="mb-3 text-5 text-uppercase">Sociais</h2>
            <ul className="social-icons ml-md-n2 justify-content-center justify-content-md-start">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
