const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

const initialState = {
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      loggingIn: true,
    };
  case LOGIN_SUCCESS:
    return {
      ...state,
      loggingIn: false,
      user: action.result,
    };
  case LOGIN_FAIL:
    return {
      ...state,
      loggingIn: false,
      user: null,
      loginError: action.error,
    };
  default:
    return state;
  }
}

export function login(name) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: client => client.post('/login', {
      data: {
        name,
      },
    }),
  };
}
