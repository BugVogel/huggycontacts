import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import {HeaderButtonContainer, IconView, SaveButtonView} from './styles';
import Icon from '../icon/Icon';
import {BaseText} from '../../styles/baseUI';
import BaseButton from '../../styles/components/basebutton/BaseButton';
import {ReducerContext} from '../../context/ReducerProvider';

const HeaderButtons = props => {
  const theme = useTheme();
  const navigation = useNavigation();
  const {dispatchContacts} = useContext(ReducerContext).contacts;
  const stackArray = navigation.getState().routes;
  const actualScreen = stackArray[stackArray.length - 1];
  // console.log('PARAM:', actualScreen.params);

  return (
    <HeaderButtonContainer>
      {props.contacts && (
        <>
          <IconView>
            <TouchableOpacity>
              <Icon name="" size={25} color={theme.colors.iconPrimary} />
            </TouchableOpacity>
          </IconView>
          <IconView>
            <TouchableOpacity>
              <Icon name="" size={25} color={theme.colors.iconPrimary} />
            </TouchableOpacity>
          </IconView>
        </>
      )}
      {props.seecontact && (
        <IconView>
          <TouchableOpacity>
            <Icon name="" size={25} color={theme.colors.iconPrimary} />
          </TouchableOpacity>
        </IconView>
      )}
      {props.edit && (
        <SaveButtonView>
          <BaseButton
            onPress={() =>
              dispatchContacts(
                actualScreen.params === undefined
                  ? {type: 'SAVE_CONTACT'}
                  : {type: 'UPDATE_CONTACT'},
              )
            }
            style={{padding: 12, paddingTop: 9, paddingBottom: 9}}>
            <BaseText color="#FFF">Salvar</BaseText>
          </BaseButton>
        </SaveButtonView>
      )}
      {props.leftClose && (
        <SaveButtonView>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="" size={25} />
          </TouchableOpacity>
        </SaveButtonView>
      )}
    </HeaderButtonContainer>
  );
};
export default HeaderButtons;
