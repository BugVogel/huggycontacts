export const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {...state, ...action.payload, showMessage: true};
    case 'CLOSE_ALERT':
      return {...state, showmessage: false};

    default:
      state;
  }
};
