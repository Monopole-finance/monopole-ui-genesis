import React from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout.js";

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
