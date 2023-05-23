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
import Avatar from '../avatar/Avatar';

const ListItem = ({content, avatar, isFirst = false, onPressFunction}) => {
  return (
    <ListItemContainer>
      <FirstletterView>
        {isFirst && <BaseText fontWeight={500}>{content.trim()[0]}</BaseText>}
      </FirstletterView>
      <ContentView overlayColor={'red'} onPress={onPressFunction}>
        <AvatarView>
          <Avatar name={content} />
        </AvatarView>
        <TextView>
          <BaseText>{content}</BaseText>
        </TextView>
      </ContentView>
    </ListItemContainer>
  );
};
export default ListItem;
