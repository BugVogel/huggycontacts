import React from 'react';
import {useTheme} from 'styled-components';

import {BaseButtonStyled} from '../../baseUI';
import {IconView} from './styles';
import Icon from '../../../components/icon/Icon';

const BaseButton = props => {
  const theme = useTheme();

  return (
    <BaseButtonStyled
      onPress={props.onPress}
      color={props?.color}
      style={props?.style}
      circle={props?.circle}>
      {props?.leftIcon && (
        <IconView
          style={{
            marginRight: props?.justIcon ? 0 : 8,
          }}>
          <Icon
            size={18}
            name={props.leftIcon}
            color={
              props?.iconColor
                ? theme.colors[props.iconColor]
                  ? theme.colors[props.iconColor]
                  : props.iconColor
                : theme.colors.iconPrimary
            }
          />
        </IconView>
      )}
      {props.children}
    </BaseButtonStyled>
  );
};

export default BaseButton;
