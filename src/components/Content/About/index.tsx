import React from "react";

const About: React.FC = () => {
  return (
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
          <div className="col-lg-7 text-center text-lg-left">
            <h2 className="text-7 font-weight-600 mb-3">
              {"Sou "}
              <span className="text-primary">Davilson,</span>
              {" Full-stack Developer"}
            </h2>
            <p>
              Graduado em Sistemas de Informação no Centro Universitário das
              Faculdades Associadas de Ensino — UNIFAE, sou apaixonado por
              programação e atuo profissionalmente na área há mais de 8 anos.
            </p>
            <p>
              Atualmente trabalho em projetos que utilizam a stack
              <b> React Native</b>, <b>React Js</b> e <b>NodeJs</b> com bancos
              de dados
              <b> Postgres</b>, <b>MongoDb</b>, <b>MySQL</b>, <b>Redis</b>,
              entre outros.
            </p>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0">
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
                  <span className="font-weight-600 mr-2">Email:</span>
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
                href="/davilson-cv.pdf"
                className="btn btn-primary rounded-pill"
                target="_blank"
              >
                Baixar currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
