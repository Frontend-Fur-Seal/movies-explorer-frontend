import FormWrapper from "../FormWrapper/FormWrapper.js";

function Register() {

    return (
      <FormWrapper
      title={'Добро пожаловать!'}
      submit={'Зарегистрироваться'}
      text={'Уже зарегистрированы?'}
      changeLink={'Войти'}
      link={'/signin'}
      formTypeSubmit={'form__submit-register'}
      >
        <form className="register">
        <label for="registerInput-name" className="input__label">Имя</label>
          <input 
          id="registerInput-name"
          required=""
          minLength={2}
          maxLength={20}
          type="text" 
          className="input" />
          <p className="input__error"></p>
          <label for="registerInput-email" className="input__label">E-mail</label>
          <input 
          id="registerInput-email"
          required=""
          minLength={2}
          maxLength={30}
          type="email" 
          className="input" />
          <p className="input__error"></p>
          <label for="registerInput-password" className="input__label">Пароль</label>
          <input 
          id="registerInput-password"
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
  
  export default Register;
  