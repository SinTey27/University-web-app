import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Programs from "./component/Programs/Programs";
import Title from "./component/Title/Title";
import About from "./component/About/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" title="What We Offer" />
        <Programs />
        <About />
      </div>
    </div>
  );
};

export default App;
