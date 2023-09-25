import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PopularPage } from "./pages/PopularPage/PopularPage";
import { RandomPage } from "./pages/RandomPage/RandomPage";
import { MoviePage } from "./pages/MoviePage/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/random" element={<RandomPage />} />
        <Route path="/most-popular" element={<PopularPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="*" element={<Navigate to="/random" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
