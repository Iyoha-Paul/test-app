import React, { useState } from "react";

// import { Todo } from "./model";

const TestQuestions = () => {
  //   let questions = JSON.parse(localStorage.getItem("triviaQuestions") || "[]");
  const shuffleArray = (array: any) => {
    const solh = [...array].sort(() => Math.random() - 0.5);
    return solh;
  };
  const saveQuestions = (questions: any) => {
    // Alltodos.push(todo);
    const allQuestionsReady = questions.results.map((question: any) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
    localStorage.setItem("triviaQuestions", JSON.stringify(allQuestionsReady));
    // console.log(JSON.stringify(allQuestionsReady));
  };
  const saveScore = (score: Number) => {
    localStorage.setItem("triviaQuestionsScore", JSON.stringify(score));
  };
  const handleClearAll = () => {
    localStorage.setItem("triviaQuestions", "");
    // window.location.reload();
  };
  return { saveQuestions, handleClearAll, saveScore };
};

export default TestQuestions;
