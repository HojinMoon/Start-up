import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import Preview from "./screens/preview";
import Main from "./screens/Main";
import Analysis from "./screens/Analysis";
import Consulting from "./screens/Consulting";
import Consult_list from "./screens/Consult_list";
import Consultant from "./screens/Consultant";
import Home from "./screens/Home";
import Service from "./screens/Service";
import Login from "./screens/Login";
import Contact from "./screens/Contact";
import Account from "./screens/Account";
import Select from "./screens/Select_card";
import Form1 from "./screens/Form1";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={Preview} exact />
      <Route path="/main" component={Main} />
      <Route path="/analysis/:sector" component={Analysis} />
      <Route path="/consulting" component={Consulting} />
      <Route path="/Consult_list" component={Consult_list} />
      <Route path="/Consultant" component={Consultant} />
      <Route path="/home" component={Home} />
      <Route path="/service" component={Service} />
      <Route path="/My" component={Login} />
      <Route path="/contact" component={Contact} />
      <Route path="/account" component={Account} />
      <Route path="/select_card" component={Select} />
      <Route path="/form_step1" component={Form1} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
