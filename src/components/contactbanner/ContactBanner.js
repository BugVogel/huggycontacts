import React from 'react';
import {View, Text} from 'react-native';
import {ContactBannerContainer} from './styles';
import Avatar from '../avatar/Avatar';
import {BaseText} from '../../styles/baseUI';

const ContactBanner = ({name, number, photo}) => {
  return (
    <ContactBannerContainer>
      <Avatar name={name} size={80} photo={photo} />
      <BaseText fontSize={20} center fontWeight={500}>
        {name}
      </BaseText>
      <BaseText color="gray">{number}</BaseText>
    </ContactBannerContainer>
  );
};
export default ContactBanner;
