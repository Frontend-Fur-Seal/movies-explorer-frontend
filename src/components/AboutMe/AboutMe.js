import hoverAvatar from "../../images/avatar.jpg";

function AboutMe() {

    return (
        <section className="aboutMe" id="student">
          <h2 className="title">Студент</h2>
          <div className="aboutMe__info">
            <h3 className="aboutMe__title">Владимир</h3>
            <p className="aboutMe__subtitle">Фронтенд-разработчик, 33 года</p>
            <p className="aboutMe__text">Я родился и живу в Москве, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь мотокроссом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <a href="https://github.com/VladimirSherstnev" className="aboutMe__git" rel="noreferrer" target="_blank">Github</a>
          <img src={hoverAvatar} className="aboutMe__avatar" alt="Аватар" />
        </section>
    );
  }
  
  export default AboutMe;