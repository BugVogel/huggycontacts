import axios from 'axios';

export const getContacts = async dispatch => {
  await axios.get('/contacts').then(response => {
    const data = response.data;
    const dataArray = Object.keys(data).map(key => data[key]);
    dispatch({type: 'GET_CONTACTS', payload: dataArray});
    dispatch({type: 'LOADED'});
  });
};

export const addContact = async (dispatch, contact) => {
  await axios.post('/contacts', {...contact}).then(_ => {
    dispatch({type: 'ADD_CONTACT', payload: {...contact}});
  });
};

export const updateContact = async (dispatch, contact) => {
  await axios
    .put(`/contacts/${contact.id}`, {...contact})
    .then(response => {
      dispatch({type: 'UPDATED_CONTACT', payload: {...contact}});
    })
    .catch(e => console.log(e));
};

export const deleteContact = async (dispatch, contactId) => {
  await axios.delete(`/contacts/${contactId}`).then(_ => {
    dispatch({type: 'DELETED_CONTACT', payload: contactId});
  });
};
