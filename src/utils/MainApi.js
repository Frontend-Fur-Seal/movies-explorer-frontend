class MainApi {
    constructor(config) {
      this._baseUrl = config.baseUrl;
      this._headers = config.headers;
    }
  
    _checkStatus(res) {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }
  
    SignOut(){
      return fetch(`${this._baseUrl}/signout`, {
        method: "GET",
        headers: this._headers,
        credentials: 'include',
      }).then((res) => {
        return this._checkStatus(res);
      });
    }
  
    getInitialUser() {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "GET",
        headers: this._headers,
        credentials: 'include',
      }).then((res) => {
        return this._checkStatus(res);
      });
    }
  
    getMovies() {
      return fetch(`${this._baseUrl}/movies`, {
        method: "GET",
        headers: this._headers,
        credentials: 'include',
      }).then((res) => {
        return this._checkStatus(res);
      });
    }
  
    postInitialUser(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify(data),
      }).then((res) => this._checkStatus(res));
    }
  
    postInitialUserAvatar(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify(data),
      }).then((res) => this._checkStatus(res));
    }
  
    saveMovie(data) {
      return fetch(`${this._baseUrl}/movies`, {
        method: "POST",
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify(data),
      }).then((res) => {
        return this._checkStatus(res);
      });
    }
  
    cardDelete(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
        credentials: 'include',
      }).then((res) => this._checkStatus(res));
    }
  
    changeLikeCardStatus(cardId, isLiked){
      if(!isLiked){
        return fetch(`${this._baseUrl}/cards/${cardId}/likes `, {
          method: "PUT",
          headers: this._headers,
          credentials: 'include',
        }).then((res) => this._checkStatus(res));
      }else{
        return fetch(`${this._baseUrl}/cards/${cardId}/likes `, {
          method: "DELETE",
          headers: this._headers,
          credentials: 'include',
        }).then((res) => this._checkStatus(res));
      }
    }
  }
  
  const mainApi = new MainApi({
    baseUrl: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default mainApi;
  