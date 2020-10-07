import axios from 'axios';

export function getAPI(url) {
  return axios.request({
    method: 'GET',
    url,
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
