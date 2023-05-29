import styled from 'styled-components/native';
import {withTheme} from 'styled-components';

export const AbsoluteButtonContainer = styled.View`
  position: absolute;
  bottom: 10px;
  right: 10px;
  flex-direction: row;
`;

export const Button = withTheme(styled.TouchableOpacity`
  border-radius: 28px;
  padding: 12px;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`);

export const IconView = styled.View`
  margin-right: ${props => (props?.hasText ? `8px` : `0px`)};
`;
