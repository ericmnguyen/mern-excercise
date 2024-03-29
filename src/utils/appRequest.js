import axios from 'axios';

export const basePath =
  process.env.NODE_ENV === 'production'
    ? 'https://corona-tracking-api.herokuapp.com'
    : 'http://localhost:5000';

export function getAPI(url, params = {}, headers = {}) {
  return axios.request({
    method: 'GET',
    params,
    url,
    headers,
  });
}

export function postAPI(url = '', authParams = {}, headers = {}) {
  return axios
    .request({
      method: 'POST',
      url,
      data: authParams,
      headers,
    })
    .then((data) => data)
    .catch((error) => {
      if (error.response) {
        return error.response.status;
      }
    });
}
