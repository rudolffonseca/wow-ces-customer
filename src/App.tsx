import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MessageForm } from "./components/MessageForm";
import NavBar from "./components/NavBar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<MessageForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
