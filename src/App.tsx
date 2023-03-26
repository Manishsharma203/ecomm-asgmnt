import React from "react";
import { RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import logo from "./logo.svg";
import { router } from "./routes/Router";
import "./theme/theme.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
