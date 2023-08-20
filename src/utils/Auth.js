export const BASE_URL = 'http://localhost:3000';

function checkStatus(res) {
  return res.ok ? res.json() : Promise.reject(res.status);
}

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    credentials: 'include',
  })
  .then((res) => {
    return checkStatus(res);
  })
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({name, email, password})
  })
  .then((res) => {
    return checkStatus(res);
  })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })
  .then((res) => {
    return checkStatus(res);
  })
};
