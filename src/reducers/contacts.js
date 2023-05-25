export function reducer(state, action) {
  switch (action.type) {
    case 'GET_CONTACTS':
      return {
        ...state,
        contacts: action.payload, //Its a array
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'LOADED':
      return {
        ...state,
        loading: false,
      };
    case 'ADD_CONTACT':
      let contacts = [...state.contacts];
      contacts.push(action.payload);
      return {
        ...state,
        contacts,
      };
    case 'SAVE_CONTACT':
      return {
        ...state,
        saveContact: true,
      };
    case 'SAVED_CONTACT':
      return {
        ...state,
        saveContact: false,
      };
    case 'UPDATE_CONTACT':
      return state;
    default:
      return state;
  }
}
