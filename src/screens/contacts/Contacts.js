import React, {useState, useEffect, useContext} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {ContactsContainer} from './styles';
import List from '../../components/list/List';
import {orderListJSON} from './utils';
import AbsoluteButton from '../../components/absolutebutton/AbsoluteButton';
import {ReducerContext} from '../../context/ReducerProvider';
import {getContacts} from '../../apirequests/contacts';
import {
  ActivityIndicatorContainer,
  BaseActivityIndicator,
} from '../../styles/baseUI';

const Contacts = props => {
  const [showAbsoluteButtonText, setShowAbsoluteButtonText] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const refreshState = {isRefreshing, setIsRefreshing};
  const [contactsList, setContactsList] = useState([]);
  const reducerContextValues = useContext(ReducerContext);
  const {contactsState, dispatchContacts} = reducerContextValues.contacts;
  const {dispatchNotifications} = reducerContextValues.notifications;
  const {userState, dispatchUser} = reducerContextValues.user;

  useEffect(() => {
    dispatchContacts({type: 'LOADING'});
    getContacts(dispatchContacts, dispatchNotifications);
  }, []);

  useEffect(() => {
    if (
      (contactsState?.refresh && !userState.searchbarEnabled) ||
      isRefreshing
    ) {
      dispatchContacts({type: 'LOADING'});
      getContacts(dispatchContacts, dispatchNotifications);
      setIsRefreshing(false);
      dispatchUser({type: 'SEARCHBAR_DISABLED'});
      dispatchContacts({type: 'REFRESHED_CONTACTS'});
    }
  }, [contactsState?.refresh, isRefreshing]);

  useEffect(() => {
    if (contactsState?.contacts !== undefined && !contactsState?.loading) {
      setContactsList(orderListJSON(contactsState.contacts));
    }
  }, [contactsState?.loading]);

  useEffect(() => {
    if (userState?.searchString === '') {
      setContactsList(orderListJSON(contactsState.contacts));
      dispatchUser({type: 'SEARCH_LOADED'});
      return;
    }
    if (userState.searchbarEnabled) {
      let newSearchList = [...contactsState.contacts].filter(contact => {
        return (
          contact?.name
            ?.toLowerCase()
            .includes(userState.searchString.toLowerCase()) ||
          contact?.email
            ?.toLowerCase()
            .includes(userState.searchString.toLowerCase()) ||
          contact?.phone
            ?.toLowerCase()
            .includes(userState.searchString.toLowerCase()) ||
          contact?.mobile
            ?.toLowerCase()
            .includes(userState.searchString.toLowerCase())
        );
      });

      newSearchList = orderListJSON(newSearchList);
      setContactsList([...newSearchList]);
      dispatchUser({type: 'SEARCH_LOADED'});
    }
  }, [userState?.searchString]);

  return (
    <>
      {contactsState?.loading ||
      contactsState?.contacts === undefined ||
      userState.searchLoading ? (
        <ActivityIndicatorContainer>
          <BaseActivityIndicator />
        </ActivityIndicatorContainer>
      ) : (
        <ContactsContainer>
          <List
            refreshState={refreshState}
            listJSON={contactsList}
            setIsGoingUp={isGoingUp => setShowAbsoluteButtonText(isGoingUp)}
            navigation={props.navigation}
          />
          {contactsList.length !== 0 &&
            contactsList !== undefined &&
            contactsList !== null && (
              <AbsoluteButton
                iconName={''}
                label={'Criar contato'}
                showText={showAbsoluteButtonText}
                onPress={() => props.navigation.navigate('EditCreateContact')}
              />
            )}
        </ContactsContainer>
      )}
    </>
  );
};
export default Contacts;
