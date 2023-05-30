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
        saveContact: false,
      };
    case 'SAVE_CONTACT':
      return {
        ...state,
        saveContact: true,
      };
    case 'CANCEL_SAVE_CONTACT':
      return {
        ...state,
        saveContact: false,
      };
    case 'UPDATE_CONTACT':
      return {...state, updateContact: true};
    case 'CANCEL_UPDATE_CONTACT':
      return {...state, updateContact: false};
    case 'UPDATED_CONTACT':
      const updatedContacts = state.contacts.map(contact => {
        if (contact.id === action.payload.id) {
          return {...contact, ...action.payload};
        }
        return contact;
      });
      return {
        ...state,
        contacts: updatedContacts,
        updateContact: false,
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        deleting: true,
      };
    case 'NOT_DELETING':
      return {
        ...state,
        deleting: false,
      };
    case 'DELETED_CONTACT':
      //remove from state.contact the id dipacthed
      let newContactsAfterDelete = state.contacts.filter(
        contact => contact.id != action.payload,
      );
      return {
        ...state,
        contacts: newContactsAfterDelete,
        deleting: false,
      };
    case 'REFRESH_CONTACTS':
      return {...state, refresh: true};
    case 'REFRESHED_CONTACTS':
      return {...state, refresh: false};

    default:
      return state;
  }
}
