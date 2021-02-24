import React from "react";

const Skills: React.FC = () => {
  const skills = [
    {
      icon: "reactjs.svg",
      title: "React Js",
      description:
        "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.",
    },
    {
      icon: "reactnative.svg",
      title: "React Native",
      description:
        "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.",
    },
    {
      icon: "nextjs.svg",
      title: "Next.js",
      description:
        "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.",
    },
    {
      icon: "nodejs.svg",
      title: "Node Js",
      description:
        "Node.js é um software de código aberto, multiplataforma, que executa códigos JavaScript no backend e frontend, baseado no V8 interpretador de JavaScript em C++ do Google, mantido pela fundação Node.js em parceria com a Linux Foundation.",
    },
    {
      icon: "rest.png",
      title: "REST",
      description:
        "Representational State Transfer, é um estilo de arquitetura de software que define um conjunto de restrições a serem usadas para a criação de web services.",
    },
    {
      icon: "graphql.png",
      title: "GraphQL",
      description:
        "GraphQL é uma linguagem de consulta criada pelo Facebook em 2012 e lançada publicamente em 2015. É considerada uma alternativa para arquiteturas REST, além de oferecer um serviço runtime para rodar comandos e consumir uma API.",
    },
    {
      icon: "typescript.svg",
      title: "TypeScript",
      description:
        "TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem.",
    },
    {
      icon: "jest.svg",
      title: "Jest",
      description:
        "Jest é uma estrutura de teste de JavaScript agradável com foco na simplicidade. Trabalha com projetos usando: Babel , TypeScript , Node , React , Angular , Vue e muito mais!",
    },
    {
      icon: "serverless.svg",
      title: "Serverless",
      description:
        "Serverless é um modelo de desenvolvimento nativo em nuvem para criação e execução de aplicações sem o gerenciamento de servidores.",
    },
    {
      icon: "mongodb.svg",
      title: "MongoDB",
      description:
        "MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.",
    },
    {
      icon: "postgres.svg",
      title: "PostgreSQL",
      description:
        "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.",
    },
    {
      icon: "mysql.svg",
      title: "MySQL",
      description:
        "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation.",
    },
    {
      icon: "redis.png",
      title: "Redis",
      description:
        "Redis é um armazenamento de estrutura de dados em memória, usado como um banco de dados em memória distribuído de chave-valor, cache e agente de mensagens, com durabilidade opcional.",
    },
  ];
  return (
    <section id="skills" className="section bg-light">
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0">
            Habilidades
          </h2>
          <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
            Habilidades
            <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>
          </p>
        </div>
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {skills.map((i) => (
                <div className="col-md-6" key={i.title}>
                  <div className="featured-box style-3 mb-5">
                    <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                      <img src={`/icons/${i.icon}`} alt={i.title} />
                    </div>
                    <h3>{i.title}</h3>
                    <p className="mb-0">{i.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
