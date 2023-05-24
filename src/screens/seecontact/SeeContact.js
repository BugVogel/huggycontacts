import React from 'react';
import {View, Text} from 'react-native';
import {
  ContactBannerWrapper,
  InfoContactWrapper,
  SeeContactsContainer,
} from './styles';
import ContactBanner from '../../components/contactbanner/ContactBanner';
import InfoContact from '../../components/infocontact/InfoContact';

const SeeContact = props => {
  //   props.navigation.setOptions({title: props.route.params.name});
  const contact = props.route.params;
  return (
    <SeeContactsContainer>
      <ContactBannerWrapper>
        <ContactBanner name={contact.name} number={230219} />
      </ContactBannerWrapper>
      <InfoContactWrapper>
        <InfoContact contact={contact} />
      </InfoContactWrapper>
    </SeeContactsContainer>
  );
};
export default SeeContact;
