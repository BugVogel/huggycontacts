import axios from 'axios';

export const getContacts = async (dispatchContacts, dispatchNotifications) => {
  await axios
    .get('/contacts')
    .then(response => {
      const data = response.data;
      const dataArray = Object.keys(data).map(key => data[key]);
      dispatchContacts({type: 'GET_CONTACTS', payload: dataArray});
      dispatchContacts({type: 'LOADED'});
    })
    .catch(error => {
      dispatchNotifications({
        type: 'SHOW_ALERT',
        payload: {
          title: 'Ops! Houve um problema.',
          message:
            'Não foi possível carregar sua lista de contatos, tente de novo mais tarde',
        },
      });
    });
};

export const addContact = async (
  dispatchContacts,
  contact,
  dispatchNotifications,
) => {
  await axios
    .post('/contacts', {...contact})
    .then(_ => {
      dispatchContacts({type: 'ADD_CONTACT', payload: {...contact}});
    })
    .catch(error => {
      //Apesar de não cadastrar um usuário o backend não retorna erro quando o usuário tenta cadastrar um email/telefone/celular já cadastrado
      dispatchContacts({type: 'CANCEL_SAVE_CONTACT'});
      dispatchNotifications({
        type: 'SHOW_ALERT',
        payload: {
          title: 'Ops! Houve um problema.',
          message:
            'Não foi possível adicionar este contato, verifique se os campos estão preenchidos corretamente',
        },
      });
    });
};

export const updateContact = async (
  dispatchContacts,
  contact,
  dispatchNotifications,
) => {
  await axios
    .put(`/contacts/${contact.id}`, {...contact})
    .then(response => {
      dispatchContacts({type: 'UPDATED_CONTACT', payload: {...contact}});
    })
    .catch(e => {
      //Apesar de não atualizar um usuário o backend não retorna erro quando o usuário tenta cadastrar um email/telefone/celular já cadastrado
      dispatchContacts({type: 'CANCEL_UPDATE_CONTACT'});
      dispatchNotifications({
        type: 'SHOW_ALERT',
        payload: {
          title: 'Ops! Houve um problema.',
          message:
            'Não foi possível modificar este contato, verifique se os campos estão preenchidos corretamente',
        },
      });
    });
};

export const deleteContact = async (
  dispatchContacts,
  contactId,
  dispatchNotifications,
) => {
  await axios
    .delete(`/contacts/${contactId}`)
    .then(_ => {
      dispatchContacts({type: 'DELETED_CONTACT', payload: contactId});
    })
    .catch(error => {
      dispatchContacts({type: 'NOT_DELETING'});
      dispatchNotifications({
        type: 'SHOW_ALERT',
        payload: {
          title: 'Ops! Houve um problema.',
          message:
            'Não foi possível deletar este contato, tente novamente mais tarde',
        },
      });
    });
};
