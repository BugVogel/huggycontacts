import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from './ListItem';
import EmptyList from '../emptylist/EmptyList';
import {ListContainer} from './styles';

const List = ({listJSON, firstIndexs}) => {
  return (
    <ListContainer>
      <FlatList
        data={listJSON}
        renderItem={({item, index}) => {
          const nameArray = item.name.split(' ');
          const acronym =
            nameArray[0][0].toUpperCase() +
            nameArray[nameArray.length - 1][0].toUpperCase();

          return (
            <ListItem
              content={item.name}
              acronym={acronym}
              isFirst={firstIndexs.includes(index)}
            />
          );
        }}
        ListEmptyComponent={EmptyList}
      />
    </ListContainer>
  );
};
export default List;
