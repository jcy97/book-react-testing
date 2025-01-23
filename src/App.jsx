import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

function Home() {
  return (
    <>
      <h1>책나무 서점에 오신 것을 환영합니다.</h1>
      <h2>환영합니다. 고객님</h2>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
