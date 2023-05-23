import React from 'react';
import {View, Text} from 'react-native';
import EmptyList from '../../components/emptylist/EmptyList';

const Contacts = props => {
  return (
    <ContactsContainer>
      <EmptyList />
    </ContactsContainer>
  );
};
export default Contacts;
