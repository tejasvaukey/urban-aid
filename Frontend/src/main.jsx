// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./AppWrapper"; // Import AppWrapper instead of App

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper /> {/* Use AppWrapper here */}
  </React.StrictMode>
);
