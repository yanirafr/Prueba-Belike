import React from "react";
import { useState, useEffect } from "react";
import "../stylesheet/App.scss";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login/Login.js";
import Home from "./Home/Home";

const App = () => {
  const [headerName, setHeaderName] = useState("");

  const handleUserName = (userName) => {
    setHeaderName(userName);
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">Belike</h1>
        <Link to="/">
          <img
            className="header__image"
            src="https://www.belikesoftware.com/wp-content/uploads/2018/09/belikelogo_.png"
            alt="belike"
          />
        </Link>
        <p className="header__text">Bienvenida {headerName}</p>
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Login sendUserName={handleUserName} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
