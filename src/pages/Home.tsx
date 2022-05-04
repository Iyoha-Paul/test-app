import React from "react";
import Navbar from "../components/Navbar";
import TestParameters from "../components/TestParameters";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <h1>
          Test App <span>Powered by react</span>
        </h1>
        <TestParameters />
      </div>
    </div>
  );
};

export default Home;
