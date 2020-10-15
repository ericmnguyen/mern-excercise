import axios from 'axios';

export const basePath = 'http://localhost:5000';

export function getAPI(url, params = {}, headers = {}) {
  return axios.request({
    method: 'GET',
    params,
    url,
    headers,
  });
}

export function postAPI(url = '', authParams = {}) {
  return axios
    .request({
      method: 'POST',
      url,
      data: authParams,
    })
    .then((data) => data);
}
