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
        <Head />
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
