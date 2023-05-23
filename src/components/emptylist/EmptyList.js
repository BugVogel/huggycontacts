import React from 'react';
import {View, Text} from 'react-native';
import {EmptyListContainer} from './styles';
import {BaseText} from '../../styles/baseUI';
import BaseButton from '../../styles/components/basebutton/BaseButton';

const EmptyList = props => {
  return (
    <EmptyListContainer>
      <BaseText color="#757575">Ainda não há contatos</BaseText>
      <BaseButton leftIcon={''} iconColor={'#FFF'}>
        <BaseText color="#FFF">Adicionar contato</BaseText>
      </BaseButton>
    </EmptyListContainer>
  );
};
export default EmptyList;
