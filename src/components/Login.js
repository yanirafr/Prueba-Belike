import { useState, useEffect } from "react";

const Login = (props) => {
  //State
  const [passLenght, setPassLenght] = useState();

  //Return
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
          />
          <label className="login__form__label" htmlFor="userPassword">
            Contraseña:
          </label>
          <input
            className="login__form__input"
            type="password"
            name="userPassword"
            id="userPassword"
            minlength="7"
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
