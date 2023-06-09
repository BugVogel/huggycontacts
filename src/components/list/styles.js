import styled from 'styled-components/native';
import {withTheme} from 'styled-components';

export const ListContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ListItemContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 14px;
  padding-left: 16px;
`;

export const TextView = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex: 1;
`;

export const FirstletterView = styled.View`
  flex: 2;
  align-items: flex-start;
  justify-content: center;
`;

export const ContentView = withTheme(styled.TouchableOpacity`
  flex: 8;
  border-radius: 8px;
  flex-direction: row;
  background-color: ${props =>
    props.selected ? props.theme.colors.secondary : '#FFF'};
`);

export const AvatarView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

export const EmptySearchAdviseView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
