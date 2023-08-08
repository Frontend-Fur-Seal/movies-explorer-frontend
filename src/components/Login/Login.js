import FormWrapper from "../FormWrapper/FormWrapper.js";

function Login() {

    return (
      <FormWrapper
      title={'Рады видеть!'}
      submit={'Войти'}
      text={'Еще не зарегистрированы?'}
      changeLink={'Регистрация'}
      link={'/signup'}
      >
        <form className="login__form">
          <p className="form__subtitle">E-mail</p>
          <input 
          required=""
          minLength={2}
          maxLength={30}
          type="email" 
          className="input login__input-email" />
          <p className="form__subtitle">Пароль</p>
          <input 
          required=""
          minLength={2}
          maxLength={20}
          type="password" 
          className="input login__input-password" />
        </form>
      </FormWrapper>
    );
  }
  
  export default Login;
  