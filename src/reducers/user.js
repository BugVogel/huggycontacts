export function reducer(state, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      return {...state, logged: true};
    case 'LOGGED_OUT':
      return {...state, logged: false};

    default:
      return {...state};
  }
}
