import React from "react";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="section">
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">
            Resumo
          </h2>
          <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
            Experiência/Formação
            <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
          </p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2 className="text-6 font-weight-600 mb-4">Experiência</h2>
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge badge-primary text-2 font-weight-400">
                2019 - atual
              </p>
              <h3 className="text-5">Full-stack Developer</h3>
              <p className="text-danger">FOXKEY</p>
              <p className="mb-0">
                FoxKey é o nome fantasia da minha empresa, onde trabalho
                fornecendo serviços para uma empresa de desenvolvimento que se
                localiza no Rio Grande do Sul. Tecnologias: NodeJs, ReactJs,
                React Native, MySql, PostgreSQL, MongoDb, Redis.
              </p>
            </div>
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge badge-primary text-2 font-weight-400">
                2017 - 2019
              </p>
              <h3 className="text-5">Analista de Sistemas</h3>
              <p className="text-danger">PERFECT FLIGHT</p>
              <p className="mb-0">
                Controle e processamento de dados de aviões de pulverização para
                o setor agrícola. Fiz parte desde o início do desenvolvimento do
                software da empresa. Tecnologias: PHP, NodeJs, ReactJs, MySql.
              </p>
            </div>
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge badge-primary text-2 font-weight-400">
                2016 - 2017
              </p>
              <h3 className="text-5">Programador</h3>
              <p className="text-danger">FREELANCE</p>
              <p className="mb-0">
                Desenvolvimento em tempo livre de um ERP para provedores de
                internet e TV de São Sebastião do Paraíso para a empresa
                NetSpeed. Tecnologias: PHP e Mysql.
              </p>
            </div>
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge badge-primary text-2 font-weight-400">
                2014 - 2016
              </p>
              <h3 className="text-5">Analista de Sistemas</h3>
              <p className="text-danger">DIGITALLYMADE</p>
              <p className="mb-0">
                Desenvolvimento de sites e sistemas para diversas áreas.
                Responsável por coordenar e designar as tarefas para cada
                colaborador da equipe. Tecnologias: PHP e MySql.
              </p>
            </div>
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge badge-primary text-2 font-weight-400">
                2012 - 2014
              </p>
              <h3 className="text-5">Programador</h3>
              <p className="text-danger">GN1 SISTEMAS PARA INTERNET</p>
              <p className="mb-0">
                Desenvolvimento e manutenção de sistemas para submissão de
                artigos científicos por parte de médicos pesquisadores.
                Responsável por colher requisitos, desenvolver e dar treinamento
                aos usuários do sistema.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="text-6 font-weight-600 mb-4">Formação</h2>
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge badge-primary text-2 font-weight-400">
                2016 - 2018
              </p>
              <h3 className="text-5">Pós grad. - Mobile</h3>
              <p className="text-danger">INSTITUTO FEDERAL</p>
              <p className="mb-0">
                O curso aborda melhores práticas para se trabalhar com o
                desenvolvimento para dispositivos móveis. No último módulo do
                curso trabalhamos com desenvolvimento de protótipos eletrônico.
              </p>
            </div>
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge badge-primary text-2 font-weight-400">
                2012 - 2016
              </p>
              <h3 className="text-5">Sist. de Informação</h3>
              <p className="text-danger">UNIFAE</p>
              <p className="mb-0">
                O curso abordou o desenvolvimento de softwares utilizando as
                principais tecnologias utilizadas no mercado. Abordou diversos
                padrões de projetos e métodos de desenvolvimento ágil.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            href="/davilson-cv.pdf"
            className="btn btn-outline-secondary rounded-pill"
            target="_blank"
          >
            Baixar currículo
            <span className="ml-1">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
