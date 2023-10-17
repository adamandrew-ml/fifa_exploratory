import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/App.css"
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Fifa from "./pages/Fifa";
import About from "./pages/About";
import Sudoku from "./pages/Sudoku";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="sudoku" element={<Sudoku />} />
          <Route path="fifa" element={<Fifa />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();


