import axios from 'axios';

export const getContacts = async dispatch => {
  await axios.get('/contacts').then(response => {
    const data = response.data;
    const dataArray = Object.keys(data).map(key => data[key]);
    dispatch({type: 'GET_CONTACTS', payload: dataArray});
    dispatch({type: 'LOADED'});
  });
};
