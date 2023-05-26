import React, {useEffect} from 'react';
import {BaseInput, BaseText} from '../../styles/baseUI';
import {AlertTextView, InputView} from './styles';

const FormConstructor = ({formState}) => {
  let formValues = [...formState.formStateValues];

  useEffect(() => {
    formState.setFormStateValues(formValues);
  }, []);

  return (
    <>
      {formValues.map((input, index) => {
        return (
          <InputView key={index}>
            <BaseInput
              style={
                input?.alert || input?.alertEmail || input?.alertMobile
                  ? {
                      borderRightColor: 'red',
                      borderLeftColor: 'red',
                      borderTopColor: 'red',
                      borderBottomColor: 'red',
                    }
                  : {}
              }
              placeholder={input.placeholder}
              placeholderTextColor={
                input?.alert || input?.alertEmail || input?.alertMobile
                  ? 'red'
                  : 'gray'
              }
              value={formState.formStateValues[index]?.value}
              onChangeText={text => {
                let newFormValues = [...formState.formStateValues];
                newFormValues[index] = {
                  ...newFormValues[index],
                  value: text,
                  alert: false,
                  alertEmail: false,
                  alertMobile: false,
                };
                formState.setFormStateValues(newFormValues);
              }}
            />
            {input?.alert && (
              <AlertTextView>
                <BaseText color="red" fontSize={12}>
                  Campo obrigatório
                </BaseText>
              </AlertTextView>
            )}
            {input?.alertEmail && (
              <AlertTextView>
                <BaseText color="red" fontSize={12}>
                  Email inválido
                </BaseText>
              </AlertTextView>
            )}
            {input?.alertMobile && (
              <AlertTextView>
                <BaseText color="red" fontSize={12}>
                  Número de celular inválido
                </BaseText>
              </AlertTextView>
            )}
          </InputView>
        );
      })}
    </>
  );
};
export default FormConstructor;
