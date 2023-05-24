import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {BaseInput} from '../../styles/baseUI';
import {InputView} from './styles';

const FormConstructor = ({formJSON, formState}) => {
  let formValues = [...formState.formStateValues];

  useEffect(() => {
    formState.setFormStateValues(formValues);
  }, []);

  return (
    <>
      {formJSON.map((input, index) => {
        formValues[index] = {
          name: input.placeholder,
          ...(input?.value ? {value: input.value} : {}),
        };
        return (
          <InputView key={index}>
            <BaseInput
              placeholder={input.placeholder}
              placeholderTextColor={'#1C1C1C'}
              value={formState.formStateValues[index]?.value}
              onChangeText={text => {
                let newFormValues = [...formState.formStateValues];
                newFormValues[index] = {...newFormValues[index], value: text};
                formState.setFormStateValues(newFormValues);
              }}
            />
          </InputView>
        );
      })}
    </>
  );
};
export default FormConstructor;
