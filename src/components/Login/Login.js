import { useState, useEffect } from "react";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = (props) => {
  //State
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const [userPassword, setUserPassword] = useState("");
  const [userConfirm, setUserConfirm] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [passLenght, setPassLenght] = useState("");
  const [passHashtag, setPasshashtag] = useState("");
  const [passUpper, passSetUpper] = useState("");
  const [enableSubmit, setEnableSubmit] = useState("");

  // User
  const handleUser = (ev) => {
    const user = ev.target.value;
    const regex = /[^A-Za-z0-9]/;
    const validUser = regex.test(user);

    if (!validUser) {
      setUserMessage("");
      setUserName(user);
    } else {
      setUserMessage(
        "! El nombre de usuario no puede contener caracteres especiales"
      );
    }
  };

  // Password
  const handlePassword = (ev) => {
    const password = ev.target.value;
    setUserPassword(password);
    const regex = /[A-Z]/;
    const containsUpperCase = regex.test(password);

    if (password.length > 1 && password.length < 7) {
      setPassLenght("incorrect");
    } else if (password.length > 7) {
      setPassLenght("correct");
    }

    if (password.includes("#")) {
      setPasshashtag("correct");
    } else {
      setPasshashtag("incorrect");
    }

    if (!containsUpperCase) {
      passSetUpper("incorrect");
    } else {
      passSetUpper("correct");
    }

    if (password === userConfirm) {
      setPassConfirm("correct");
    } else {
      setPassConfirm("incorrect");
    }
  };

  // Confirm Password

  const handleConfirmPassword = (ev) => {
    const confirmation = ev.target.value;

    setUserConfirm(confirmation);

    if (userPassword === confirmation) {
      setPassConfirm("correct");
    } else {
      setPassConfirm("incorrect");
    }
  };

  useEffect(() => {
    if (
      passConfirm === "correct" &&
      passLenght === "correct" &&
      passHashtag === "correct" &&
      passUpper === "correct" &&
      userMessage === "" &&
      userName !== ""
    ) {
      setEnableSubmit("");
    } else {
      setEnableSubmit("disabled");
    }
  });

  const handleButton = () => {
    if (
      passConfirm === "correct" &&
      passLenght === "correct" &&
      passHashtag === "correct" &&
      passUpper === "correct" &&
      userMessage === "" &&
      userName !== ""
    ) {
      props.sendUserName(userName);
    }
  };

  // Return
  return (
    <>
      <section className="login">
        <h2 className="login__title">Crea tu cuenta</h2>
        <form className="login__form">
          <label className="login__form__label" htmlFor="userName">
            Nombre de usuario:
          </label>
          <input
            className="login__form__input"
            type="text"
            name="userName"
            id="userName"
            placeholder="Usuario"
            onChange={handleUser}
          />
          <p className="login__form__message">{userMessage}</p>
          <label className="login__form__label" htmlFor="userPassword">
            Contraseña:
          </label>
          <input
            className="login__form__input"
            type="password"
            name="userPassword"
            id="userPassword"
            minLength="7"
            placeholder="Contraseña"
            onChange={handlePassword}
          />
          <label className="login__form__label" htmlFor="userPasswordConfirm">
            Confirma tu contraseña:
          </label>
          <input
            className="login__form__input"
            type="password"
            name="userPasswordConfirm"
            id="userPasswordConfirm"
            minLength="7"
            placeholder="Repite tu contraseña"
            onChange={handleConfirmPassword}
          />
          <ul className="login__form__list">
            <li className={passHashtag}>Debe contener #</li>
            <li className={passUpper}>Debe contener mayúsculas</li>
            <li className={passLenght}>Debe tener más de 7 caracteres</li>
            <li className={passConfirm}>Las contraseñas deben coincidir</li>
          </ul>
          <Link to="/home">
            <button
              className={"login__form__button " + enableSubmit}
              disabled={enableSubmit}
              onClick={handleButton}
            >
              Regístrate
            </button>
          </Link>
        </form>
      </section>
    </>
  );
};

export default Login;
