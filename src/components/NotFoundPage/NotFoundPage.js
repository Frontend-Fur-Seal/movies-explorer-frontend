import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="main">
      <section className="notFoundPage">
        <div className="notFoundPage__info">
          <h1 className="notFoundPage__title">404</h1>
          <p className="notFoundPage__subtitle">Страница не найдена</p>
        </div>
        <Link to="/" className="notFoundPage__link">
          Назад
        </Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
