import React from 'react';

import {
  AvatarView,
  ContentView,
  FirstletterView,
  ListItemContainer,
  TextView,
} from './styles';
import {BaseText} from '../../styles/baseUI';
import Avatar from '../avatar/Avatar';

const ListItem = ({content, photo, isFirst = false, onPressFunction}) => {
  return (
    <ListItemContainer>
      <FirstletterView>
        {isFirst && (
          <BaseText fontWeight={500}>
            {content.trim()[0].toUpperCase()}
          </BaseText>
        )}
      </FirstletterView>
      <ContentView overlayColor={'red'} onPress={onPressFunction}>
        <AvatarView>
          <Avatar name={content} photo={photo} />
        </AvatarView>
        <TextView>
          <BaseText>{content}</BaseText>
        </TextView>
      </ContentView>
    </ListItemContainer>
  );
};
export default ListItem;
