import React from "react";
import "../stylesheet/App.scss";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login.js";

const App = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default App;
