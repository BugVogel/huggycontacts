import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';

import {HeaderButtonContainer, IconView} from './styles';
import Icon from '../icon/Icon';

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
    </HeaderButtonContainer>
  );
};
export default HeaderButtons;
