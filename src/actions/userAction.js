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
