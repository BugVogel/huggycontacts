import React from 'react';
import {View, Text} from 'react-native';

import {AvatarContainer} from './styles';
import {BaseText} from '../../styles/baseUI';

const Avatar = ({acronym}) => {
  return (
    <AvatarContainer>
      <BaseText color={'#180D6E'}>{acronym}</BaseText>
    </AvatarContainer>
  );
};
export default Avatar;
