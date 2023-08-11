function Portfolio() {

    return (
        <section className="portfolio">
          <h4 className="portfolio__title">Портфолио</h4>
          <ul className="portfolio__works">
            <li className="portfolio__work"><a href="https://github.com/VladimirSherstnev/how-to-learn" className="portfolio__link" rel="noreferrer" target="_blank">Статичный сайт</a></li>
            <li className="portfolio__work"><a href="https://github.com/VladimirSherstnev/Great-travel-Story" className="portfolio__link" rel="noreferrer" target="_blank">Адаптивный сайт</a></li>
            <li className="portfolio__work"><a href="https://github.com/VladimirSherstnev/express-mesto-gha" className="portfolio__link" rel="noreferrer" target="_blank">Одностраничное приложение</a></li>
          </ul>
        </section>
    );
  }
  
  export default Portfolio;