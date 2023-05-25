import React, {useState, useEffect, useContext} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {ContactsContainer} from './styles';
import List from '../../components/list/List';
import mockDatas from '../../mock/mockDatas';
import {getFirstIndexs, orderListJSON} from './utils';
import AbsoluteButton from '../../components/absolutebutton/AbsoluteButton';
import {ReducerContext} from '../../context/ReducerProvider';
import {getContacts} from '../../apirequests/contacts';
import {useIsFocused} from '@react-navigation/native';

const Contacts = props => {
  const {contactsState, dispatchContacts} = useContext(ReducerContext).contacts;
  const isFocused = useIsFocused();
  const [showAbsoluteButtonText, setShowAbsoluteButtonText] = useState(false);
  let listJSONOrdely = [];
  let firstIndex = [];

  if (contactsState?.contacts !== undefined && !contactsState?.loading) {
    listJSONOrdely = orderListJSON(contactsState?.contacts);
    firstIndex = getFirstIndexs(listJSONOrdely);
  }

  useEffect(() => {
    if (isFocused) {
      dispatchContacts({type: 'LOADING'});
      getContacts(dispatchContacts);
    }
  }, [isFocused]);

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
