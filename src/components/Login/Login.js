import { useState, useEffect } from "react";
import "./login.scss";

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

  // User
  const handleUser = (ev) => {
    const user = ev.target.value;
    const regex = /[^A-Za-z0-9]/;
    const validUser = regex.test(user);

    if (!validUser) {
      setUserMessage("");
    } else {
      setUserMessage(
        "El nombre de usuario no puede contener caracteres especiales"
      );
      setUserName(user);
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

  // Return
  return (
    <>
      <section className="login">
        <form className="login__form">
          <label className="login__form__label" htmlFor="userName">
            Usuario:
          </label>
          <input
            className="login__form__input"
            type="text"
            name="userName"
            id="userName"
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
            minlength="7"
            onChange={handlePassword}
          />
          <label className="login__form__label" htmlFor="userPassword">
            Confirmar contraseña:
          </label>
          <input
            className="login__form__input"
            type="password"
            name="userPassword"
            id="userPassword"
            minlength="7"
            onChange={handleConfirmPassword}
          />
          <input type="submit" value="Sign up" />
        </form>
        <ul>
          <li className={passHashtag}>Debe contener #</li>
          <li className={passUpper}>Debe contener mayúsculas</li>
          <li className={passLenght}>Debe tener más de 7 caracteres</li>
          <li className={passConfirm}>
            La confirmación de contraseña debe coincidir
          </li>
        </ul>
      </section>
    </>
  );
};

export default Login;
