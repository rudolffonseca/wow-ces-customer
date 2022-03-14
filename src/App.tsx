import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MessageForm } from "./components/MessageForm";
import NavBar from "./components/NavBar";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Details } from "./pages/Details/Details";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ticket/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
