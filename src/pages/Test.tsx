import React from "react";
import { useState } from "react";

const Test = () => {
  const [questionId, setQuestionId] = useState(0);
  let allQuestions = JSON.parse(
    localStorage.getItem("triviaQuestions") || "[]"
  );
  // console.log(allQuestions.results[0]);
  let currentQuestion = allQuestions.results[questionId];
  console.log(currentQuestion);
  return (
    <div className="container test">
      <div className="question"> {`${currentQuestion.question}`}</div>
    </div>
  );
};

export default Test;
