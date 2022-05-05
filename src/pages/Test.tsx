import { escape, stringify } from "querystring";
import React from "react";
import { useState } from "react";
import parse from "html-react-parser";
import { HTMLEscapeUnescapeModule } from "html-escape-unescape";
const Test = () => {
  const Questions = JSON.parse(localStorage.getItem("triviaQuestions") || "[]");
  const totalQstn = Questions.length;
  const [questionId, setQuestionId] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const generateId = () => {
    const newId = Date.now();
    // id++;
    return newId;
  };
  const handleProceed = (option: string) => {
    selectedOption === currentQuestion.correct_answer
      ? console.log("yes")
      : console.log("no");
    // setSelectedOption(option);
    // setQuestionId(Number(`${questionId + 1}`));
  };

  const currentQuestion = Questions[questionId];

  // console.log(currentQuestion);
  return (
    <div className="container test">
      <div className="score-info">{totalQstn}</div>
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
                onClick={() => {
                  setSelectedOption(option);
                }}
              >
                <i className="fa-solid fa-circle "></i>
              </button>
              {parse(option)}
              <div className="correct">
                {selectedOption === option ? "👈" : ""}
              </div>
            </li>
          </div>
        ))}
        <div className="test__controls">
          <button
            className="test__controls__next"
            onClick={() => handleProceed(selectedOption)}
          >
            Next
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Test;
