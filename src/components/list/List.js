import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from './ListItem';
import EmptyList from '../emptylist/EmptyList';
import {ListContainer} from './styles';

const List = ({listJSON, firstIndexs, setIsGoingUp = () => {}, navigation}) => {
  const [currentOffset, setCurrentOffset] = useState(0);
  return (
    <ListContainer>
      <FlatList
        onScroll={event => {
          if (event.nativeEvent.contentOffset.y > currentOffset) {
            setIsGoingUp(true);
          } else {
            setIsGoingUp(false);
          }
          setCurrentOffset(event.nativeEvent.contentOffset.y);
        }}
        data={listJSON}
        renderItem={({item, index}) => {
          return (
            <ListItem
              onPressFunction={() =>
                navigation.navigate('SeeContact', {...item})
              }
              content={item.name}
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
