import Form from "../Form/Form.js";

function Login() {

    return (
      <Form
      title={'Рады видеть!'}
      submit={'Войти'}
      text={'Еще не зарегистрированы?'}
      changeLink={'Регистрация'}
      link={'/signup'}
      formTypeSubmit={'form__submit-login'}
      >
        <form className="login">
          <label htmlFor="loginInput-email" className="form__label">E-mail</label>
          <input 
          id="loginInput-email"
          required={true}
          minLength={2}
          maxLength={30}
          type="email" 
          className="form__input"
          />
          <p className="form__error"></p>

          <label htmlFor="loginInput-password" className="form__label">Пароль</label>
          <input 
          id="loginInput-password"
          required={true}
          minLength={2}
          maxLength={20}
          type="password" 
          className="form__input" />
          <p className="form__error"></p>
        </form>
      </Form>
    );
  }
  
  export default Login;
  