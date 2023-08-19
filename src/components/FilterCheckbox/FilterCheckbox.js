function FilterCheckbox(props) {

  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__wrap">
        <input
          type="checkbox"
          name="checkbox"
          className={`filterCheckbox__input ${props.isShort ? 'filterCheckbox__input_short' : ''}`}
          onClick={props.changeMoviesLength}
        />
        <span className="filterCheckbox__mark" />
      </label>
      <p className="filterCheckbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
