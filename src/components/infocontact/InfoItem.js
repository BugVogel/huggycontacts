import React from 'react';
import {useTheme} from 'styled-components';

import {InfoItemContainer} from './styles';
import {BaseText} from '../../styles/baseUI';

const InfoItem = ({label, content}) => {
  const theme = useTheme();

  return (
    <InfoItemContainer style={{borderBottomWidth: label && content ? 1 : 0}}>
      <BaseText color={label && content ? '#1C1C1C' : theme.colors.primary}>
        {label}
      </BaseText>
      {content && <BaseText color="#050505">{content}</BaseText>}
    </InfoItemContainer>
  );
};
export default InfoItem;
