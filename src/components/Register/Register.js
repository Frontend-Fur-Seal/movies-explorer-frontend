import Form from "../Form/Form.js";

function Register() {
  return (
    <main className="main">
      <Form
        title={"Добро пожаловать!"}
        submit={"Зарегистрироваться"}
        text={"Уже зарегистрированы?"}
        changeLink={"Войти"}
        link={"/signin"}
        formTypeSubmit={"form__submit-register"}
      >
        <form className="register">
          <label htmlFor="registerInput-name" className="form__label">
            Имя
          </label>
          <input
            id="registerInput-name"
            required={true}
            minLength={2}
            maxLength={20}
            type="text"
            className="form__input"
          />
          <p className="form__error"></p>
          <label htmlFor="registerInput-email" className="form__label">
            E-mail
          </label>
          <input
            id="registerInput-email"
            required={true}
            type="email"
            className="form__input"
          />
          <p className="form__error"></p>
          <label htmlFor="registerInput-password" className="form__label">
            Пароль
          </label>
          <input
            id="registerInput-password"
            required={true}
            minLength={2}
            maxLength={20}
            type="password"
            className="form__input"
          />
          <p className="form__error"></p>
        </form>
      </Form>
    </main>
  );
}

export default Register;
