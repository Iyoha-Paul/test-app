import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";
import Result from "./pages/Result";

// x
function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/result" element={<Result />} />

        {/* <Route path="/create" element={<TodoInput />} /> */}
        {/* <Route path="/edit/:id" element={<EditTodo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
