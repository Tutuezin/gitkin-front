import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/antd.min.css";
import "react-toastify/dist/ReactToastify.css";
import Favicon from "react-favicon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Favicon url="https://cdn.discordapp.com/attachments/478000281355943936/1029173825583202334/GitKin-1-removebg-preview2.png" />
    <App />
  </React.StrictMode>
);
