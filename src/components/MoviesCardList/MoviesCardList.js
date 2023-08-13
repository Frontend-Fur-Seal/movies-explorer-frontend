import MoviesCard from "../MoviesCard/MoviesCard";

import testImage from "../../images/movieCard.jpg";

const cards = [
  {
    _id: 1,
    name: "33 слова о дизайне",
    link: testImage,
    duration: "1ч 17м",
  },
  {
    _id: 2,
    name: "33 слова о дизайне",
    link: testImage,
    duration: "1ч 17м",
  },
  {
    _id: 3,
    name: "33 слова о дизайне",
    link: testImage,
    duration: "1ч 17м",
  },
  {
    _id: 4,
    name: "33 слова о дизайне",
    link: testImage,
    duration: "1ч 17м",
  },
  {
    _id: 5,
    name: "33 слова о дизайне",
    link: testImage,
    duration: "1ч 17м",
  },
  {
    _id: 1,
    name: "33 слова о дизайне",
    link: testImage,
    duration: "1ч 17м",
  },
  {
    _id: 2,
    name: "33 слова о дизайне",
    link: testImage,
    duration: "1ч 17м",
  },
  {
    _id: 3,
    name: "33 слова о дизайне",
    link: testImage,
    duration: "1ч 17м",
  },
  {
    _id: 1,
    name: "33 слова о дизайне",
    link: testImage,
    duration: "1ч 17м",
  },
  {
    _id: 2,
    name: "33 слова о дизайне",
    link: testImage,
    duration: "1ч 17м",
  },
  
];

function MoviesCardList() {
  return (
    <ul className="moviesCardList">
      {cards.map((card) => (
        <MoviesCard key={card._id} card={card} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
