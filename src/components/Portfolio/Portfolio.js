function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__works">
        <li className="portfolio__work">
          <a
            href="https://github.com/VladimirSherstnev/how-to-learn"
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
          >
            <p className="portfolio__work-name">Статичный сайт</p>
            <p className="portfolio__icon"></p>
          </a>
        </li>
        <li className="portfolio__work">
          <a
            href="https://github.com/VladimirSherstnev/Great-travel-Story"
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
          >
            <p className="portfolio__work-name">Адаптивный сайт</p>
            <p className="portfolio__icon"></p>
          </a>
        </li>
        <li className="portfolio__work">
          <a
            href="https://github.com/VladimirSherstnev/express-mesto-gha"
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
          >
            <p className="portfolio__work-name">Одностраничное приложение</p>
            <p className="portfolio__icon"></p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
