import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';

import {HeaderButtonContainer, IconView, SaveButtonView} from './styles';
import Icon from '../icon/Icon';
import {BaseText} from '../../styles/baseUI';
import BaseButton from '../../styles/components/basebutton/BaseButton';

const HeaderButtons = props => {
  const theme = useTheme();

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
          <BaseButton style={{padding: 12, paddingTop: 9, paddingBottom: 9}}>
            <BaseText color="#FFF">Salvar</BaseText>
          </BaseButton>
        </SaveButtonView>
      )}
    </HeaderButtonContainer>
  );
};
export default HeaderButtons;
