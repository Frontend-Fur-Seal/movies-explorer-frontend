import { useState } from "react";
import Form from "../Form/Form.js";

function Login({ handleLogin }) {

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin(formValue.email, formValue.password);
  }

  return (
    <main className="main">
      <Form
        title={"Рады видеть!"}
        text={"Еще не зарегистрированы?"}
        changeLink={"Регистрация"}
        link={"/signup"}
      >
        <form className="login" onSubmit={handleSubmit}>
          <label htmlFor="loginInput-email" className="form__label">
            E-mail
          </label>
          <input
            placeholder="E-mail"
            id="loginInput-email"
            required={true}
            minLength={2}
            maxLength={30}
            type="email"
            className="form__input"
            value={formValue.email}
            name="email"
            onChange={handleChange}
          />
          <p className="form__error"></p>

          <label htmlFor="loginInput-password" className="form__label">
            Пароль
          </label>
          <input
            placeholder="Пароль"
            id="loginInput-password"
            required={true}
            minLength={2}
            maxLength={20}
            type="password"
            className="form__input"
            value={formValue.password}
            name="password"
            onChange={handleChange}
          />
          <p className="form__error"></p>
          <button type="submit" className="form__submit-login">Войти</button>
        </form>
      </Form>
    </main>
  );
}

export default Login;
