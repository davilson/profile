import Head from "next/head";
import Content from "../components/Content";
import Footer from "../components/Footer";
import SidebarLeft from "../components/SidebarLeft";
import Preloader from "../components/Preloader";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <main>
      <Preloader />
      <div id="main-wrapper">
        <SidebarLeft />
        <Content />
        <Footer />
      </div>
      <BackToTop />
    </main>
  );
}
