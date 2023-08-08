import FormWrapper from "../FormWrapper/FormWrapper.js";

function Register() {

    return (
      <FormWrapper
      title={'Добро пожаловать!'}
      submit={'Зарегистрироваться'}
      text={'Уже зарегистрированы?'}
      changeLink={'Войти'}
      link={'/signin'}
      >
        <form className="register__form">
          <p className="form__subtitle">Имя</p>
          <input 
          required=""
          minLength={2}
          maxLength={20}
          type="text" 
          className="input register__input-name" />
          <p className="form__subtitle">E-mail</p>
          <input 
          required=""
          minLength={2}
          maxLength={30}
          type="email" 
          className="input register__input-email" />
          <p className="form__subtitle">Пароль</p>
          <input 
          required=""
          minLength={2}
          maxLength={20}
          type="password" 
          className="input register__input-password" />
        </form>
      </FormWrapper>
    );
  }
  
  export default Register;
  