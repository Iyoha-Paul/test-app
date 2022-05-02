import { useState, useEffect } from "react";
const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("data not found");
          }
          // console.log(res.ok);

          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          }
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading, error };
};
export default useFetch;
