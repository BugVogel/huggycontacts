import React from 'react';
import {View, Text} from 'react-native';
import EmptyList from '../../components/emptylist/EmptyList';
import {ContactsContainer} from './styles';
import List from '../../components/list/List';
import mockDatas from '../../mock/mockDatas';
import {getFirstIndexs} from './utils';

const Contacts = props => {
  const listJSON = mockDatas.contactList;
  const firstIndex = getFirstIndexs(listJSON);
  console.log(firstIndex);
  return (
    <ContactsContainer>
      <List listJSON={listJSON} firstIndexs={firstIndex} />
    </ContactsContainer>
  );
};
export default Contacts;
