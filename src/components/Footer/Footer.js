function Footer() {

    return (
        <footer className="footer">
          <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__info">
            <p className="footer__year">&#169; 2023</p>
            <ul className="footer__links">
              <li><a href="https://practicum.yandex.ru/" className="footer__link" rel="noreferrer" target="_blank">Яндекс.Практикум</a></li>
              <li><a href="https://github.com" className="footer__link" rel="noreferrer" target="_blank">Github</a></li>
            </ul>
          </div>
        </footer>
    );
  }
  
  export default Footer;