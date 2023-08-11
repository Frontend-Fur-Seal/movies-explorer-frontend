function FilterCheckbox() {

    return (
      <div class="filterCheckbox">
        <label class="filterCheckbox__wrap">
          <input type="checkbox" name="checkbox" class="input" />
          <span class="filterCheckbox__mark" />
        </label>
          <p class="filterCheckbox__title">Короткометражки</p>
      </div>
    );
  }
  
  export default FilterCheckbox;