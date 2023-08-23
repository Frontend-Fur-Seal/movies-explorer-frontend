import { useState } from "react";
import FormData from "../FormData/FormData.js";

function Register( {handleRegister} ) {

  const [formValue, setFormValue] = useState({
    name: '',
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
    handleRegister(formValue.name, formValue.email, formValue.password)
}

console.log(formValue)
  return (
    <main className="main">
      <FormData
        title={"Добро пожаловать!"}
        text={"Уже зарегистрированы?"}
        changeLink={"Войти"}
        link={"/signin"}
      >
        <form className="register" onSubmit={handleSubmit}>
          <label htmlFor="registerInput-name" className="form__label">
            Имя
          </label>
          <input
            placeholder="Имя"
            id="registerInput-name"
            required={true}
            minLength={2}
            maxLength={20}
            type="text"
            className="form__input"
            onChange={handleChange}
            value={formValue.name}
            name="name"
          />
          <p className="form__error"></p>
          <label htmlFor="registerInput-email" className="form__label">
            E-mail
          </label>
          <input
            placeholder="E-mail"
            id="registerInput-email"
            required={true}
            type="email"
            className="form__input"
            onChange={handleChange}
            value={formValue.email}
            name="email"
            autoComplete='on'
          />
          <p className="form__error"></p>
          <label htmlFor="registerInput-password" className="form__label">
            Пароль
          </label>
          <input
            placeholder="Пароль"
            id="registerInput-password"
            required={true}
            minLength={2}
            maxLength={20}
            type="password"
            className="form__input"
            onChange={handleChange}
            value={formValue.password}
            name="password"
          />
          <p className="form__error"></p>
          <button type="submit" className='form__submit-register'>Зарегистрироваться</button>
        </form>
      </FormData>
    </main>
  );
}

export default Register;
