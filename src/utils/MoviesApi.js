class MoviesApi{
    constructor(config){
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
        
    }

_statusError(res){
  return res.ok ? res.json(): Promise.reject(res.status)
}

getMovies(){
  return fetch(this._baseUrl, {
    method: 'GET',
    headers: this._headers
  })
  .then((res) => {
    return this._statusError(res)})
}

}

export default MoviesApi

