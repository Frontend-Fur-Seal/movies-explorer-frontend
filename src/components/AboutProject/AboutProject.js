function AboutProject() {

    return (
      <section className="aboutProject" id="aboutProject">
        <h2 className="title">О проекте</h2>
        <div className="aboutProject__texts">
          <h4 className="aboutProject__subtitleStages">Дипломный проект включал 5 этапов</h4>
          <h4 className="aboutProject__subtitleWeeks">На выполнение диплома ушло 5 недель</h4>
          <p className="aboutProject__textStages">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и   финальные доработки.</p>
          <p className="aboutProject__textWeeks">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы   успешно защититься.</p>
        </div>
        <div className="aboutProject__terms">
          <p className="aboutProject__backendWeeks">1 неделя</p>
          <p className="aboutProject__frontendWeeks">4 недели</p>
          <p className="aboutProject__backend">Back-end</p>
          <p className="aboutProject__frontend">Front-end</p>
        </div>
      </section>
    );
  }
  
  export default AboutProject;