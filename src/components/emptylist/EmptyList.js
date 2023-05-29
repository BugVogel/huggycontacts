import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {EmptyListContainer, ImageView, TextView} from './styles';
import {BaseText} from '../../styles/baseUI';
import BaseButton from '../../styles/components/basebutton/BaseButton';

const EmptyList = props => {
  const navigation = useNavigation();
  return (
    <EmptyListContainer>
      <ImageView>
        <Image
          source={require('../../../assets/images/EmptyContactsImage.png')}
        />
      </ImageView>
      <TextView>
        <BaseText color="#757575">Ainda não há contatos</BaseText>
      </TextView>
      <BaseButton
        leftIcon={''}
        iconColor={'#FFF'}
        onPress={() => navigation.navigate('EditCreateContact')}>
        <BaseText color="#FFF">Adicionar contato</BaseText>
      </BaseButton>
    </EmptyListContainer>
  );
};
export default EmptyList;
