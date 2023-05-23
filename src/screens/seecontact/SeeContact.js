import React from 'react';
import {View, Text} from 'react-native';
import {SeeContactsContainer} from './styles';
import ContactBanner from '../../components/contactbanner/ContactBanner';

const SeeContact = props => {
  //   props.navigation.setOptions({title: props.route.params.name});
  const contact = props.route.params;
  return (
    <SeeContactsContainer>
      <ContactBanner name={contact.name} number={230219} />
    </SeeContactsContainer>
  );
};
export default SeeContact;
