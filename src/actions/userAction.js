export function userAction(params) {
  return { type: 'UPDATE_USER', params };
}

export function getAllUsers() {
  return { type: 'GET_ALL_USERS' };
}

export function setUsername(param) {
  return { type: 'SET_USER_NAME', param };
}

export function getUserInfo(params) {
  return { type: 'GET_USER_INFO', params };
}

export function getUserInfoSuccess(data) {
  return { type: 'GET_USER_INFO_SUCCESS', data };
}

export function getUserInfoFail(err) {
  return { type: 'GET_USER_INFO_FAIL', err };
}

export function fieldVerifying(payload) {
  return { type: 'FIELD_VERIFYING', payload };
}
