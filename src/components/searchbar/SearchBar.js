import React, {useContext, useState} from 'react';
import {useTheme} from 'styled-components';

import {IconView, SearchBarContainer, SearchBarInputView} from './styles';
import {BaseInput} from '../../styles/baseUI';
import {ReducerContext} from '../../context/ReducerProvider';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from '../icon/Icon';

const SearchBar = props => {
  const [searchText, setSearchText] = useState('');
  const {dispatchUser} = useContext(ReducerContext).user;
  const theme = useTheme();

  return (
    <SearchBarContainer>
      <IconView>
        <TouchableOpacity
          onPress={() => dispatchUser({type: 'SEARCHBAR_DISABLED'})}>
          <Icon name="" size={25} color={theme.colors.iconPrimary} />
        </TouchableOpacity>
      </IconView>
      <SearchBarInputView>
        <BaseInput
          plain
          placeholder="Pesquisar"
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
            dispatchUser({type: 'SEARCH_LOADING'});
            dispatchUser({type: 'SEARCH_STRING', payload: text});
          }}
        />
      </SearchBarInputView>
      {searchText !== '' && (
        <IconView>
          <TouchableOpacity
            onPress={() => {
              setSearchText('');
              dispatchUser({type: 'SEARCH_STRING', payload: ''});
              dispatchUser({type: 'SEARCH_LOADED', payload: ''});
            }}>
            <Icon name="" size={25} color={theme.colors.iconPrimary} />
          </TouchableOpacity>
        </IconView>
      )}
    </SearchBarContainer>
  );
};
export default SearchBar;
