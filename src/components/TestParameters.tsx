import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
import TestQuestions from "./TestQuestions";
const TestParameters = () => {
  const [qNum, setQNum] = useState<number>(1);
  const [difficulty, setDifficulty] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  // const [url, setUrl] = useState<string>("");
  // const { data: questions, isLoading, error } = useFetch(url);
  const { saveQuestions } = TestQuestions();
  const [testParamSet, setTestParamSet] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>();
  const [error, setError] = useState(null);
  // FUNCTIONS//FUNCTIONS//FUNCTIONS
  const fetchData = (url: string) => {
    setIsLoading(true);
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("data not found");
        }

        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        saveQuestions(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        }
        setError(err.message);
        // setIsLoading(false);
        // console.log(data);
      });
  };

  // console.log(error);
  // console.log(data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData(
      `https://opentdb.com/api.php?amount=${qNum}${
        category ? `&category=${category}` : ""
      }${difficulty ? `&difficulty=${difficulty}` : ""}&type=multiple`
    );
    setTestParamSet(true);
    // console.log(url);
  };
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div>
      <form action="" className="parameters" onSubmit={handleSubmit}>
        <h1>{}</h1>
        <div className="form-parameter">
          <label>Number of questions: </label>
          <input
            className="form-parameter__answer"
            type="number"
            name="number"
            min="1"
            max="20"
            value={qNum}
            onChange={(e) => setQNum(Number(e.target.value))}
            required
          />
        </div>
        <div className="form-parameter">
          <label>Category: </label>
          <select
            name="dropdown"
            className="form-parameter__answer"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
          </select>
        </div>
        <div className="form-parameter">
          <label>Select Difficulty: </label>
          <select
            name="dropdown"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="form-parameter__answer"
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {isLoading && !!testParamSet ? (
          <div>Please wait, Getting questions...</div>
        ) : !isLoading && testParamSet ? (
          <NavLink to="/test" className="link buttons">
            Start Test!
          </NavLink>
        ) : (
          <button className="btn buttons">Get Questions</button>
        )}
        <div>
          {error ? (
            <div>
              error code: ({error}) please
              <span onClick={handleReload}> reload page</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </form>

      {/* {!isLoading? } */}
    </div>
  );
};

export default TestParameters;
