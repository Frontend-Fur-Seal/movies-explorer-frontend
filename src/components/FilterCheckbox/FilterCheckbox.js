function FilterCheckbox() {

    return (
        <div className="filterCheckbox">
          <label className="checkbox_wrap">
            <input type="checkbox" name="checkbox" className="checkbox_inp" />
            <span className="checkbox_mark" />
          </label>
          <p className="filterCheckbox__title">Короткометражки</p>
        </div>
    );
  }
  
  export default FilterCheckbox;