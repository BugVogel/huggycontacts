import React, {useState} from 'react';
import {View, Text} from 'react-native';
import EmptyList from '../../components/emptylist/EmptyList';
import {ContactsContainer} from './styles';
import List from '../../components/list/List';
import mockDatas from '../../mock/mockDatas';
import {getFirstIndexs, orderListJSON} from './utils';
import AbsoluteButton from '../../components/absolutebutton/AbsoluteButton';

const Contacts = props => {
  const [showAbsoluteButtonText, setShowAbsoluteButtonText] = useState(false);
  const listJSON = mockDatas.contactList;
  const listJSONOrdely = orderListJSON(listJSON);
  const firstIndex = getFirstIndexs(listJSONOrdely);

  return (
    <ContactsContainer>
      <List
        listJSON={listJSONOrdely}
        firstIndexs={firstIndex}
        setIsGoingUp={isGoingUp => setShowAbsoluteButtonText(isGoingUp)}
      />
      <AbsoluteButton
        iconName={''}
        label={'Criar contato'}
        showText={showAbsoluteButtonText}
      />
    </ContactsContainer>
  );
};
export default Contacts;
