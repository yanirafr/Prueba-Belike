import React from "react";
import "../stylesheet/App.scss";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login.js";

const App = () => {
  return (
    <>
      <header></header>
      <main>
        <Login />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
