class Api {
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

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
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

  postInitialCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
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

const api = new Api({
  baseUrl: "https://api.mesto.sherstnev.nomoreparties.sbs",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
