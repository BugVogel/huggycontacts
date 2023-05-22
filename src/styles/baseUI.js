import styled from 'styled-components/native';
import {withTheme} from 'styled-components';

export const BaseButton = styled.TouchableOpacity`
  background-color: #321bde;
  border-radius: 8px;
  flex: 1;
`;

export const BaseText = withTheme(styled.Text`
  color: ${props => (props.color ? props.color : props.theme.font.color)};
  font-family: iconmoon;
  flex-wrap: wrap;
  font-size: ${props => (props?.fontSize ? props.fontSize : 16)}px;
`);
