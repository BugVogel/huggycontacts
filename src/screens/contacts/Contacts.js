import React from 'react';
import {View, Text} from 'react-native';
import EmptyList from '../../components/emptylist/EmptyList';
import {ContactsContainer} from './styles';
import List from '../../components/list/List';
import mockDatas from '../../mock/mockDatas';
import {getFirstIndexs, orderListJSON} from './utils';

const Contacts = props => {
  const listJSON = mockDatas.contactList;
  const listJSONOrdely = orderListJSON(listJSON);
  const firstIndex = getFirstIndexs(listJSONOrdely);
  // console.log(listJSONOrdely);
  return (
    <ContactsContainer>
      <List listJSON={listJSONOrdely} firstIndexs={firstIndex} />
    </ContactsContainer>
  );
};
export default Contacts;
