import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

// x
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/create" element={<TodoInput />} /> */}
        {/* <Route path="/edit/:id" element={<EditTodo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
