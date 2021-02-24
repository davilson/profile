import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
// import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Skills from "./Skills";

const Content: React.FC = () => {
  return (
    <div id="content" role="main">
      <Home />
      <About />
      <Skills />
      <Resume />
      {/* <Portfolio /> */}
      <Contact />
    </div>
  );
};

export default Content;
