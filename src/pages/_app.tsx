import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../styles";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Davilson de Castro | Full-stack Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
        />
        <meta name="author" content="davilson.dev" />
        <meta name="title" content="Davilson de Castro"></meta>
        <meta
          name="description"
          content="Graduado em Sistemas de Informação no Centro Universitário das Faculdades Associadas de Ensino — UNIFAE, sou apaixonado por programação e atuo profissionalmente na área há mais de 8 anos. Atualmente trabalho em projetos que utilizam a stack React Native, React Js e NodeJs com bancos de dados Postgres, MongoDb, MySQL, Redis, entre outros."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://davilson.dev/" />
        <meta property="og:title" content="Davilson de Castro" />
        <meta
          property="og:description"
          content="Graduado em Sistemas de Informação no Centro Universitário das Faculdades Associadas de Ensino — UNIFAE, sou apaixonado por programação e atuo profissionalmente na área há mais de 8 anos. Atualmente trabalho em projetos que utilizam a stack React Native, React Js e NodeJs com bancos de dados Postgres, MongoDb, MySQL, Redis, entre outros."
        />
        <meta property="og:image" content="/images/profile.png" />

        <link
          rel="stylesheet"
          type="text/css"
          href="/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/vendor/font-awesome/css/all.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/vendor/owl.carousel/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/vendor/magnific-popup/magnific-popup.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/css/stylesheet.css" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
