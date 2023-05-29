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
        const verifyPhoneOrMobile =
          input.name === 'mobile' || input.name === 'phone';
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
              inputMode={
                input.name === 'mobile' || input.name === 'phone'
                  ? 'numeric'
                  : input.name
                  ? 'email'
                  : 'text'
              }
              onChangeText={text => {
                let newFormValues = [...formState.formStateValues];
                const textJustNumber = text.replace(/[^0-9]/g, '');
                const maskedText =
                  (text !== '' ? '+' : '') +
                  textJustNumber.slice(0, 2) +
                  (text.length >= 2 ? ' ' : '') +
                  textJustNumber.slice(2, textJustNumber.length);
                newFormValues[index] = {
                  ...newFormValues[index],
                  value: verifyPhoneOrMobile ? maskedText : text,
                  alert: false,
                  alertEmail: false,
                  alertMobile: false,
                };
                formState.setFormStateValues(newFormValues);
              }}
              {...(verifyPhoneOrMobile ? {maxLength: 19} : {})}
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
