import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";

// x
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/create" element={<TodoInput />} /> */}
        {/* <Route path="/edit/:id" element={<EditTodo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
