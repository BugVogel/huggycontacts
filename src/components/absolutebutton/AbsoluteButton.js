import React, {useEffect, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import BaseButton from '../../styles/components/basebutton/BaseButton';
import {BaseText} from '../../styles/baseUI';
import {AbsoluteButtonContainer} from './styles';

const AbsoluteButton = ({label, iconName, showText = true, onPress}) => {
  const labelLengthValue = useRef(new Animated.Value(0)).current;

  const growLabel = () => {
    Animated.timing(labelLengthValue, {
      toValue: label.length,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const decreaseLabel = () => {
    Animated.timing(labelLengthValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (showText) {
      decreaseLabel();
      setTimeout(() => {}, 1000);
    } else {
      growLabel();
    }
  }, [showText]);

  return (
    <AbsoluteButtonContainer>
      <BaseButton
        onPress={onPress}
        leftIcon={iconName}
        iconColor="#FFF"
        justIcon={!showText}
        circle={!showText}>
        {showText && (
          <BaseText color="#FFF">{label.substring(0, label.length)}</BaseText>
        )}
      </BaseButton>
    </AbsoluteButtonContainer>
  );
};
export default AbsoluteButton;
