import { escape, stringify } from "querystring";
import React from "react";
import { useState } from "react";
import parse from "html-react-parser";
import { HTMLEscapeUnescapeModule } from "html-escape-unescape";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import TestQuestions from "../components/TestQuestions";
const Test = () => {
  const Questions = JSON.parse(localStorage.getItem("triviaQuestions") || "[]");
  const totalQstn = Questions.length;
  const [questionId, setQuestionId] = useState(0);
  const [score, setScore] = useState(0);
  const currentQuestion = Questions[questionId];
  const [buttonClickable, setButtonClickable] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [testFinished, setFestFinished] = useState(false);
  const { saveScore } = TestQuestions();
  const handleProceed = (option: string) => {
    setButtonClickable(false);
    confirmScore();

    setRevealAnswer(true);

    setTimeout(() => {
      console.log(questionId);
      setRevealAnswer(false);
      setButtonClickable(true);
      setQuestionId(questionId + 1);
      setSelectedOption("");
    }, 3000);
    // console.log(score);
    // setSelectedOption(option);
    // setQuestionId(Number(`${questionId + 1}`));
  };
  const handleFinish = (option: string) => {
    confirmScore();
    setRevealAnswer(true);

    saveScore(score);
    setFestFinished(true);
  };
  const confirmScore = () => {
    selectedOption === currentQuestion.correct_answer
      ? setScore(score + 1)
      : console.log("no");
  };

  // console.log(currentQuestion);
  return (
    <div>
      {" "}
      <Navbar />
      <div className="container test">
        <div className="score-info">
          <div>{`Question: ${questionId + 1}/${totalQstn}`}</div>
          <div>score: {score}</div>
        </div>
        {/* <div className="question"> {parse(currentQuestion.question)}</div> */}
        <div className="qstn">
          <div className="qstn__numb">{questionId + 1}.</div>
          <div className="qstn qstn">{parse(currentQuestion.question)}</div>
        </div>
        <ul className="optns">
          {currentQuestion.answers.map((option: string) => (
            <div>
              <li className="optns__optn" key={option}>
                <button
                  className={!buttonClickable ? "no-click" : ""}
                  onClick={() => {
                    setSelectedOption(option);
                  }}
                >
                  <i className="fa-regular fa-circle "></i>
                </button>
                {parse(option)}
                <div className="selected">
                  {selectedOption === option ? "✔" : ""}
                </div>
              </li>
            </div>
          ))}
          {revealAnswer && (
            <div className="optns__answer">
              <div className="optns__answer__emoji">
                {selectedOption === currentQuestion.correct_answer
                  ? "✔️"
                  : "❌"}
              </div>
              <div className="optns__answer__ans">
                correct answer: <span>{currentQuestion.correct_answer}</span>
              </div>
            </div>
          )}
          <div className="test__controls">
            {questionId + 1 < totalQstn && (
              <button
                className={
                  buttonClickable
                    ? "test__controls__next"
                    : "test__controls__next no-click"
                }
                onClick={() => handleProceed(selectedOption)}
              >
                Next
              </button>
            )}
            {questionId + 1 >= totalQstn && !testFinished && (
              <button
                className={
                  buttonClickable
                    ? "test__controls__next"
                    : "test__controls__next no-click"
                }
                onClick={() => handleFinish(selectedOption)}
              >
                Finish
              </button>
            )}
            {testFinished && (
              <NavLink to="/result" className="test__controls__next">
                Result
              </NavLink>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Test;
