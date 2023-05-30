import React, {useState, useContext} from 'react';
import {FlatList} from 'react-native';

import ListItem from './ListItem';
import EmptyList from '../emptylist/EmptyList';
import {EmptySearchAdviseView, ListContainer} from './styles';
import {getFirstIndexs} from './util';
import {ReducerContext} from '../../context/ReducerProvider';
import {BaseText} from '../../styles/baseUI';

const List = ({listJSON, setIsGoingUp = () => {}, navigation}) => {
  const [currentOffset, setCurrentOffset] = useState(0);
  const {userState} = useContext(ReducerContext).user;
  const firstIndexs = getFirstIndexs(listJSON);

  return (
    <ListContainer>
      <FlatList
        onScroll={event => {
          if (event.nativeEvent.contentOffset.y > currentOffset) {
            setIsGoingUp(false);
          } else {
            setIsGoingUp(true);
          }
          setCurrentOffset(event.nativeEvent.contentOffset.y);
        }}
        data={listJSON}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <ListItem
              key={index}
              onPressFunction={() =>
                navigation.navigate('SeeContact', {...item})
              }
              content={item?.name}
              isFirst={firstIndexs.includes(index)}
              photo={item?.photo}
            />
          );
        }}
        {...(!userState.searchbarEnabled
          ? {ListEmptyComponent: EmptyList}
          : {})}
        ListEmptyComponent={
          !userState.searchbarEnabled ? (
            EmptyList
          ) : (
            <EmptySearchAdviseView>
              <BaseText color="gray">Nenhum resultado encontrado</BaseText>
            </EmptySearchAdviseView>
          )
        }
      />
    </ListContainer>
  );
};
export default List;
