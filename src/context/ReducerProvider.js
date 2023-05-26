import React, {createContext, useReducer} from 'react';
import {reducer as userReducer} from '../reducers/user';
import {reducer as contactsReducer} from '../reducers/contacts';

export const ReducerContext = createContext({});

const initialUserState = {
  logged: false,
  loading: false,
};

const initialContactsState = {
  loading: false,
  contact: [],
  saveContact: false,
  deleting: false,
};

const ReducerProvider = props => {
  const [userState, dispatchUser] = useReducer(userReducer, {
    ...initialUserState,
  });
  const [contactsState, dispatchContacts] = useReducer(contactsReducer, {
    ...initialContactsState,
  });

  return (
    <ReducerContext.Provider
      value={{
        user: {userState, dispatchUser},
        contacts: {contactsState, dispatchContacts},
      }}>
      {props.children}
    </ReducerContext.Provider>
  );
};
export default ReducerProvider;
