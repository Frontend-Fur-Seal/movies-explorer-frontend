import MoviesCard from "../MoviesCard/MoviesCard";

import testImage from "../../images/movieCard.svg";

const cards = [
    {
      _id: 1,
      name: '33 слова о дизайне',
      link: testImage,
      duration: '1ч 17м'
    },
    {
        _id: 2,
        name: '33 слова о дизайне',
        link: testImage,
        duration: '1ч 17м'
    },
    {
        _id: 3,
        name: '33 слова о дизайне',
        link: testImage,
        duration: '1ч 17м'
    },
]

function MoviesCardList() {
 
    return (
        <section className="moviesCardList">
        {cards.map((card) => (
          <MoviesCard
            key={card._id}
            card={card}
          />
        ))}
      </section>
    );
  }
  
  export default MoviesCardList;
