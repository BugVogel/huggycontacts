import styled from 'styled-components/native';
import {withTheme} from 'styled-components';

export const BaseButtonStyled = withTheme(styled.TouchableOpacity`
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
`);
