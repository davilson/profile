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
