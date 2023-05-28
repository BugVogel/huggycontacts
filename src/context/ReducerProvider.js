import React, {createContext, useReducer} from 'react';
import {reducer as userReducer} from '../reducers/user';
import {reducer as contactsReducer} from '../reducers/contacts';
import {reducer as notificationsReducer} from '../reducers/notifications';

export const ReducerContext = createContext({});

const initialUserState = {
  logged: false,
  loading: false,
  searchbarEnabled: false,
  searchLoading: false,
  searchString: '',
};

const initialContactsState = {
  loading: false,
  contacts: [],
  saveContact: false,
  deleting: false,
};

const initialNotificationsState = {
  showmessage: false,
};

const ReducerProvider = props => {
  const [userState, dispatchUser] = useReducer(userReducer, {
    ...initialUserState,
  });
  const [contactsState, dispatchContacts] = useReducer(contactsReducer, {
    ...initialContactsState,
  });
  const [notificationsState, dispatchNotifications] = useReducer(
    notificationsReducer,
    {...initialNotificationsState},
  );

  return (
    <ReducerContext.Provider
      value={{
        user: {userState, dispatchUser},
        contacts: {contactsState, dispatchContacts},
        notifications: {notificationsState, dispatchNotifications},
      }}>
      {props.children}
    </ReducerContext.Provider>
  );
};
export default ReducerProvider;
