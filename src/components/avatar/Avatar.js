import React from 'react';
import {Image} from 'react-native';

import {AvatarContainer} from './styles';
import {BaseText} from '../../styles/baseUI';

const Avatar = ({name, size = 40, photo}) => {
  const nameArray = name.split(' ');
  const acronym =
    nameArray[0][0].toUpperCase() +
    (nameArray.length > 1
      ? nameArray[nameArray.length - 1][0].toUpperCase()
      : '');
  return (
    <AvatarContainer style={{width: size, height: size}}>
      {photo && !photo.includes('avatar-user-boy') ? (
        <Image
          style={{height: '100%', width: '100%', borderRadius: 100}}
          source={{
            uri: photo,
          }}
          resizeMode="contain"
        />
      ) : (
        <BaseText color={'#180D6E'} fontSize={size * 0.35}>
          {acronym}
        </BaseText>
      )}
    </AvatarContainer>
  );
};
export default Avatar;
