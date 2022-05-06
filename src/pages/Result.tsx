import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import TestQuestions from "../components/TestQuestions";
const Result = () => {
  const score = JSON.parse(
    localStorage.getItem("triviaQuestionsScore") || "[]"
  );
  const Questions = JSON.parse(localStorage.getItem("triviaQuestions") || "[]");
  const totalQstn = Questions.length;
  return (
    <div>
      <Navbar />
      <div className="container result">
        <h1>Thanks for playing!</h1>
        <p>
          score:{" "}
          <span>
            {score}/{totalQstn}
          </span>
        </p>
        <div className="result__percent">
          Percentage:{" "}
          <span>{Math.floor((Number(score) * 100) / Number(totalQstn))}%</span>
        </div>
        <div>
          <NavLink to="/" className="link">
            Take a new test
          </NavLink>
        </div>
        <div className="contact">
          {" "}
          <a className="link" href="https://wa.link/c3o96r">
            Contact us/report problem
          </a>
        </div>
      </div>
    </div>
  );
};

export default Result;
