import React, { useState } from "react";

// import { Todo } from "./model";

const TestQuestions = () => {
  //   let questions = JSON.parse(localStorage.getItem("triviaQuestions") || "[]");

  const saveQuestions = (questions: any) => {
    // Alltodos.push(todo);
    localStorage.setItem("triviaQuestions", JSON.stringify(questions));
    console.log(JSON.stringify(questions));
  };

  const handleClearAll = () => {
    localStorage.setItem("triviaQuestions", "");
    // window.location.reload();
  };
  return { saveQuestions, handleClearAll };
};

export default TestQuestions;
