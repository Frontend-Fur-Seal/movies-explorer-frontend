function FilterCheckbox() {
  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__wrap">
        <input
          type="checkbox"
          name="checkbox"
          className="filterCheckbox__input"
        />
        <span className="filterCheckbox__mark" />
      </label>
      <p className="filterCheckbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
