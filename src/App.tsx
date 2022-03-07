import React from "react";
import "./App.css";
import { MessageForm } from "./components/MessageForm";
import ProductsFrame from "./components/ProductsFrame";

function App() {
  return (
    <div className="App">
      <p>CUSTOMER PAGE</p>
      <MessageForm />
      <ProductsFrame />
    </div>
  );
}

export default App;
