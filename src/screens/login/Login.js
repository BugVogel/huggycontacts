import React, {useEffect, useContext} from 'react';

import {LoginContentContainer, TitleView} from './styles';
import {
  ActivityIndicatorContainer,
  BaseActivityIndicator,
  BaseText,
} from '../../styles/baseUI';
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
      dispatchUser({type: 'NOT_LOADING_LOG'});
    }
  }, [userState?.logged]);

  return (
    <>
      {userState?.loading || userState?.logged ? (
        <ActivityIndicatorContainer>
          <BaseActivityIndicator />
        </ActivityIndicatorContainer>
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
