import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLoggedLocalStorage = async dispatch => {
  await AsyncStorage.getItem('user').then(response => {
    const user = JSON.parse(response);
    if (user !== null && user?.logged) {
      dispatch({type: 'LOGGED_IN'});
    } else {
      dispatch({type: 'LOGGED_OUT'});
    }
  });
};

export const setLoggedLocalStorage = async (dispatch, isLogged) => {
  await AsyncStorage.getItem('user').then(async getResponse => {
    const user = getResponse === null ? {} : JSON.parse(getResponse);
    await AsyncStorage.setItem(
      'user',
      JSON.stringify({...user, logged: isLogged}),
    ).then(setResponse => {
      dispatch({type: isLogged ? 'LOGGED_IN' : 'LOGGED_OUT'});
    });
  });
};
