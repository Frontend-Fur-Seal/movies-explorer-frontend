function filterData(data, movieRequest, isShort) {
  let ourList = data;
    ourList = data.filter(
      (movie) =>
        checkValue(movie.nameRU, movieRequest) ||
        checkValue(movie.nameEN, movieRequest)
    );
    function checkValue(obj, value) {
      return obj.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }
  if (isShort) {
    return ourList.filter((movie) => movie.duration < 40);
  }
  return ourList;
}

export default filterData;
