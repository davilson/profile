import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
          />
          <meta name="author" content="davilson.dev" />
          <meta
            name="description"
            content="Graduado em Sistemas de Informação no Centro Universitário das Faculdades Associadas de Ensino — UNIFAE, sou apaixonado por programação e atuo profissionalmente na área há pelo menos 8 anos. Atualmente trabalho em projetos que utilizam PHP, Node.js, React.js/React Native, HTML5, CSS3, MongoDB, MySQL, Bootstrap e Material-Ui."
          />

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

          <title>Davilson de Castro | Full-stack Developer</title>
        </Head>
        <body
          className="side-header"
          data-spy="scroll"
          data-target=".navbar"
          data-offset="1"
        >
          <Main />
          <NextScript />
          <script src="/vendor/jquery/jquery.min.js"></script>
          <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="/vendor/jquery.easing/jquery.easing.min.js"></script>
          <script src="/vendor/jquery.appear/jquery.appear.min.js"></script>
          <script src="/vendor/jquery.countTo/jquery.countTo.min.js"></script>
          <script src="/vendor/parallaxie/parallaxie.min.js"></script>
          <script src="/vendor/typed/typed.min.js"></script>
          <script src="/vendor/owl.carousel/owl.carousel.min.js"></script>
          <script src="/vendor/isotope/isotope.pkgd.min.js"></script>
          <script src="/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
          <script src="/js/theme.js"></script>
        </body>
      </Html>
    );
  }
}
