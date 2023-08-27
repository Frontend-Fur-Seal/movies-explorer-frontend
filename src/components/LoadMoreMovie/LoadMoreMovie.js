function LoadMoreMovie(props) {
  return (
    <div className="loadMoreMovie">
      {props.isShow ? (
        <button
          type="button"
          className="loadMoreMovie__button"
          onClick={props.handleClick}
        >
          Еще
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default LoadMoreMovie;
