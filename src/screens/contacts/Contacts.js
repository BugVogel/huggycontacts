import React, {useState, useEffect, useContext} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {ContactsContainer} from './styles';
import List from '../../components/list/List';
import mockDatas from '../../mock/mockDatas';
import {getFirstIndexs, orderListJSON} from './utils';
import AbsoluteButton from '../../components/absolutebutton/AbsoluteButton';
import {ReducerContext} from '../../context/ReducerProvider';
import {getContacts} from '../../apirequests/contacts';

const Contacts = props => {
  const {contactsState, dispatchContacts} = useContext(ReducerContext).contacts;

  const [showAbsoluteButtonText, setShowAbsoluteButtonText] = useState(false);
  const listJSON = mockDatas.contactList;
  let listJSONOrdely = [];
  let firstIndex = [];

  if (contactsState?.contacts !== undefined && !contactsState?.loading) {
    listJSONOrdely = orderListJSON(contactsState?.contacts);
    firstIndex = getFirstIndexs(listJSONOrdely);
  }

  useEffect(() => {
    dispatchContacts({type: 'LOADING'});
    getContacts(dispatchContacts);
  }, []);

  return (
    <>
      {contactsState?.loading && typeof contactsState !== 'undefined' ? (
        <ActivityIndicator />
      ) : (
        <ContactsContainer>
          <List
            listJSON={listJSONOrdely}
            firstIndexs={firstIndex}
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
