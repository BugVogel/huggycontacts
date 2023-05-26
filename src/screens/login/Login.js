import React, {useEffect, useContext} from 'react';
import {ActivityIndicator} from 'react-native';

import {LoginContentContainer, TitleView} from './styles';
import {BaseText} from '../../styles/baseUI';
import BaseButton from '../../styles/components/basebutton/BaseButton';
import {
  getLoggedLocalStorage,
  setLoggedLocalStorage,
} from '../../apirequests/user';
import {ReducerContext} from '../../context/ReducerProvider';

const LoginContent = props => {
  const {userState, dispatchUser} = useContext(ReducerContext).user;

  useEffect(() => {
    dispatchUser({type: 'LOADING_LOG'});
    getLoggedLocalStorage(dispatchUser);
  }, []);

  useEffect(() => {
    if (userState?.logged) {
      props.navigation.navigate('Contacts');
    }
  }, [userState?.logged]);

  return (
    <>
      {userState?.loading ? (
        <ActivityIndicator />
      ) : (
        <LoginContentContainer>
          <TitleView>
            <BaseText fontSize={24}>Login</BaseText>
          </TitleView>
          <BaseButton
            iconColor="#FFF"
            onPress={() => setLoggedLocalStorage(dispatchUser, true)}>
            <BaseText color={'#FFF'}>Fazer login com a Huggy</BaseText>
          </BaseButton>
        </LoginContentContainer>
      )}
    </>
  );
};
export default LoginContent;
