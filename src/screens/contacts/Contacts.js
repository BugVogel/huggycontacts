import React, {useState, useEffect, useContext} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {ContactsContainer} from './styles';
import List from '../../components/list/List';
import mockDatas from '../../mock/mockDatas';
import {orderListJSON} from './utils';
import AbsoluteButton from '../../components/absolutebutton/AbsoluteButton';
import {ReducerContext} from '../../context/ReducerProvider';
import {getContacts} from '../../apirequests/contacts';
import {useIsFocused} from '@react-navigation/native';

const Contacts = props => {
  const [showAbsoluteButtonText, setShowAbsoluteButtonText] = useState(false);
  const [contactsList, setContactsList] = useState([]);
  const reducerContextValues = useContext(ReducerContext);
  const {contactsState, dispatchContacts} = reducerContextValues.contacts;
  const {dispatchNotifications} = reducerContextValues.notifications;
  const {userState, dispatchUser} = reducerContextValues.user;
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatchContacts({type: 'LOADING'});
      getContacts(dispatchContacts, dispatchNotifications);
    }
  }, [isFocused]);

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
        return contact.name
          .toLowerCase()
          .includes(userState.searchString.toLowerCase());
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
        <ActivityIndicator />
      ) : (
        <ContactsContainer>
          <List
            listJSON={contactsList}
            setIsGoingUp={isGoingUp => setShowAbsoluteButtonText(isGoingUp)}
            navigation={props.navigation}
          />
          <AbsoluteButton
            iconName={''}
            label={'Criar contato'}
            showText={showAbsoluteButtonText}
            onPress={() => props.navigation.navigate('EditCreateContact')}
          />
        </ContactsContainer>
      )}
    </>
  );
};
export default Contacts;
