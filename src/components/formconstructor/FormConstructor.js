import React from 'react';
import {View, Text} from 'react-native';
import {BaseInput} from '../../styles/baseUI';
import {InputView} from './styles';

const FormConstructor = ({formJSON}) => {
  return (
    <>
      {formJSON.map((input, index) => {
        return (
          <InputView key={index}>
            <BaseInput
              placeholder={input.placeholder}
              placeholderTextColor={'#1C1C1C'}
            />
          </InputView>
        );
      })}
    </>
  );
};
export default FormConstructor;
