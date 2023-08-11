import FormWrapper from "../FormWrapper/FormWrapper.js";

function Login() {

    return (
      <FormWrapper
      title={'Рады видеть!'}
      submit={'Войти'}
      text={'Еще не зарегистрированы?'}
      changeLink={'Регистрация'}
      link={'/signup'}
      formTypeSubmit={'form__submit-login'}
      >
        <form className="login">
          <label for="loginInput-email" className="input__label">E-mail</label>
          <input 
          id="loginInput-email"
          required=""
          minLength={2}
          maxLength={30}
          type="email" 
          className="input"
          />
          <p className="input__error"></p>

          <label for="loginInput-password" className="input__label">Пароль</label>
          <input 
          id="loginInput-password"
          required=""
          minLength={2}
          maxLength={20}
          type="password" 
          className="input" />
          <p className="input__error"></p>
        </form>
      </FormWrapper>
    );
  }
  
  export default Login;
  