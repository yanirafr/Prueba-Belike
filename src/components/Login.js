import { useState, useEffect } from "react";

const Login = (props) => {
  //State
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");

  // User
  const handleUser = (ev) => {
    const user = ev.target.value;
    const regex = /[^A-Za-z0-9]/;
    const validUser = regex.test(user);

    if (!validUser) {
      setUserMessage("Bien");
    } else {
      setUserMessage("Mal");
    }
  };

  // Password
  const handlePassword = (ev) => {
    const value = ev.target.value;
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
          />
          <input type="submit" value="Sign up" />
        </form>
        <ul>
          <li>Debe contener #</li>
          <li>Debe contener mayúsculas</li>
          <li>Debe tener más de 7 caracteres</li>
          <li>La confirmación de contraseña debe coincidir</li>
        </ul>
      </section>
    </>
  );
};

export default Login;
