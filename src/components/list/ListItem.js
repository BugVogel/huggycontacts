import React from 'react';
import {View, Text} from 'react-native';
import {
  AvatarView,
  ContentView,
  FirstletterView,
  ListItemContainer,
  TextView,
} from './styles';
import {BaseText} from '../../styles/baseUI';

const ListItem = ({content, avatar, acronym, isFirst = false}) => {
  return (
    <ListItemContainer>
      <FirstletterView>
        {isFirst && <BaseText fontWeight={500}>{acronym[0]}</BaseText>}
      </FirstletterView>
      <ContentView>
        <AvatarView>
          <BaseText color={'#180D6E'}>{acronym}</BaseText>
        </AvatarView>
        <TextView>
          <BaseText>{content}</BaseText>
        </TextView>
      </ContentView>
    </ListItemContainer>
  );
};
export default ListItem;
