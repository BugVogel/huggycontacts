import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';

import {BaseInput, BaseText} from '../../styles/baseUI';
import {AlertTextView, InputView} from './styles';

const FormConstructor = ({formState}) => {
  let formValues = [...formState.formStateValues];
  const theme = useTheme();
  const [inputActivated, setInputActivated] = useState(undefined);

  useEffect(() => {
    formState.setFormStateValues(formValues);
  }, []);

  const putBordercolor = color => {
    return {
      borderRightColor: color,
      borderLeftColor: color,
      borderTopColor: color,
      borderBottomColor: color,
    };
  };

  return (
    <>
      {formValues.map((input, index) => {
        const verifyPhoneOrMobile =
          input.name === 'mobile' || input.name === 'phone';

        return (
          <InputView key={index}>
            <BaseInput
              onFocus={() => setInputActivated(index)}
              style={
                input?.alert || input?.alertEmail || input?.alertMobile
                  ? {
                      ...putBordercolor('red'),
                    }
                  : inputActivated === index
                  ? {...putBordercolor(theme.colors.primary)}
                  : {}
              }
              placeholder={input.placeholder}
              placeholderTextColor={
                input?.alert || input?.alertEmail || input?.alertMobile
                  ? 'red'
                  : inputActivated === index
                  ? theme.colors.primary
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
                  Número inválido
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
