import axios from 'axios';

export const basePath = 'https://corona-tracking-api.herokuapp.com/';

export function getAPI(url, params = {}, headers = {}) {
  console.log('process', process.env.NODE_ENV);
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
