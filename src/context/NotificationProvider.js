import React, {useContext, useEffect} from 'react';
import {Alert} from 'react-native';

import {ReducerContext} from './ReducerProvider';

const NotificationProvider = props => {
  const {notificationsState, dispatchNotifications} =
    useContext(ReducerContext).notifications;

  useEffect(() => {
    if (notificationsState?.showMessage) {
      Alert.alert(notificationsState.title, notificationsState.message, [
        {
          text: 'Entendi',
          onPress: () => dispatchNotifications({type: 'CLOSE_ALERT'}),
        },
      ]);
    }
  }, [notificationsState?.showMessage]);

  return <>{props.children}</>;
};

export default NotificationProvider;
