import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Login from "./components/Login";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
