import React from 'react';
import {View, Text} from 'react-native';

import {LoginContentContainer, TitleView} from './styles';
import {BaseText} from '../../styles/baseUI';
import BaseButton from '../../styles/components/basebutton/BaseButton';

const LoginContent = props => {
  return (
    <LoginContentContainer>
      <TitleView>
        <BaseText fontSize={24}>Login</BaseText>
      </TitleView>
      <BaseButton leftIcon="" iconColor="#FFF">
        <BaseText color={'#FFF'}>Fazer login com a Huggy</BaseText>
      </BaseButton>
    </LoginContentContainer>
  );
};
export default LoginContent;
