function Portfolio() {

    return (
        <div className="portfolio">
          <h4 className="portfolio__title">Портфолио</h4>
          <ul className="portfolio__works">
            <li className="portfolio__work"><a href="https://github.com" className="portfolio__work_link">Статичный сайт</a></li>
            <li className="portfolio__work"><a href="https://github.com" className="portfolio__work_link">Адаптивный сайт</a></li>
            <li className="portfolio__work"><a href="https://github.com" className="portfolio__work_link">Одностраничное приложение</a></li>
          </ul>
        </div>
    );
  }
  
  export default Portfolio;