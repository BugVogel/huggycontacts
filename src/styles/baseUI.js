import styled from 'styled-components/native';
import {withTheme} from 'styled-components';

export const BaseButtonStyled = withTheme(styled.TouchableOpacity.attrs(
  props => {
    return {style: props.style};
  },
)`
  background-color: ${props =>
    props?.color
      ? props.theme.colors[props.color]
        ? props.theme.colors[props.color]
        : props.color
      : props.theme.colors.primary};
  border-radius: ${props => (props?.circle ? '30px' : '8px')};
  ${props =>
    props?.circle
      ? 'padding: 17px;'
      : 'padding: 9px; padding-right: 12px; padding-left: 12px;'}

  flex-direction: row;
`);

export const BaseText = withTheme(styled.Text`
  color: ${props => (props.color ? props.color : props.theme.font.color)};
  font-family: iconmoon;
  flex-wrap: wrap;
  font-size: ${props => (props?.fontSize ? props.fontSize : 16)}px;
  font-weight: ${props => (props?.fontWeight ? props.fontWeight : 400)};
  ${props => (props?.center ? 'text-align:center;' : '')}
`);

export const BaseInput = withTheme(styled.TextInput`
  background-color: ${props => props.theme.colors.secondary};
  padding: 16px;
  border-radius: 12px;
  border-width: 1px;
  border-color: #c9c9c9;
  color: black;
`);
