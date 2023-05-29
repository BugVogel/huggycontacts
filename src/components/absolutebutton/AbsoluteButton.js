import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {AbsoluteButtonContainer, Button, IconView} from './styles';
import Icon from '../icon/Icon';

const AbsoluteButton = ({label, iconName, showText = true, onPress}) => {
  const initialWidth = 100;
  const labelLengthValue = useRef(new Animated.Value(initialWidth)).current;

  const growLabel = () => {
    Animated.timing(labelLengthValue, {
      toValue: initialWidth,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const decreaseLabel = () => {
    Animated.timing(labelLengthValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (showText) {
      growLabel();
    } else {
      decreaseLabel();
    }
  }, [showText]);

  return (
    <AbsoluteButtonContainer>
      <Button onPress={onPress} leftIcon={iconName}>
        <IconView hasText={showText}>
          <Icon name={iconName} color={'#FFF'} size={20} />
        </IconView>
        <Animated.Text
          style={{
            color: '#FFF',
            width: labelLengthValue,
            fontSize: 14,
          }}
          numberOfLines={1}>
          {label}
        </Animated.Text>
      </Button>
    </AbsoluteButtonContainer>
  );
};
export default AbsoluteButton;
