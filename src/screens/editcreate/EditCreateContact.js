import React, {useState, useEffect, useContext} from 'react';

import FormConstructor from '../../components/formconstructor/FormConstructor';
import {EditCreateContactContainer} from './styles';
import mockForms from '../../mock/mockForms';
import {formIsValidated, putValues} from './utils';
import {ReducerContext} from '../../context/ReducerProvider';
import {addContact, updateContact} from '../../apirequests/contacts';

const EditCreateContact = props => {
  const [formStateValues, setFormStateValues] = useState([]);
  const reducerContextValues = useContext(ReducerContext);
  const {contactsState, dispatchContacts} = reducerContextValues.contacts;
  const {dispatchNotifications} = reducerContextValues.notifications;
  const {dispatchUser} = reducerContextValues.user;
  const formState = {formStateValues, setFormStateValues};
  const contact = props.route.params;
  const formJSON = contact
    ? putValues(mockForms.register, contact)
    : mockForms.register;

  useEffect(() => {
    setFormStateValues(formJSON);
    contact && props.navigation.setOptions({title: 'Editar contato'});
  }, []);

  useEffect(() => {
    if (contactsState?.saveContact) {
      //Add contact
      if (!formIsValidated(setFormStateValues, formStateValues)) {
        dispatchContacts({type: 'CANCEL_SAVE_CONTACT'});
        return;
      }
      const newContact = {};
      formStateValues.map(input => {
        input?.value && (newContact[input.name] = input.value);
        newContact[input.name] &&
          input?.name === 'email' &&
          (newContact[input.name] = newContact[input.name].toLowerCase());
      });

      addContact(dispatchContacts, newContact, dispatchNotifications);
      dispatchUser({type: 'SEARCHBAR_DISABLED'});
      dispatchContacts({type: 'REFRESH_CONTACTS'});
      props.navigation.navigate('Contacts');
    }
  }, [contactsState?.saveContact]);

  useEffect(() => {
    if (contactsState?.updateContact) {
      //Update contact
      if (!formIsValidated(setFormStateValues, formStateValues)) {
        dispatchContacts({type: 'CANCEL_UPDATE_CONTACT'});
        return;
      }
      const newContact = {id: contact.id};
      formStateValues.map(input => {
        input?.value && (newContact[input.name] = input.value);
        newContact[input.name] &&
          input?.name === 'email' &&
          (newContact[input.name] = newContact[input.name].toLowerCase());
      });

      updateContact(dispatchContacts, newContact, dispatchNotifications);
      dispatchUser({type: 'SEARCHBAR_DISABLED'});
      dispatchContacts({type: 'REFRESH_CONTACTS'});
      props.navigation.navigate('Contacts');
    }
  }, [contactsState?.updateContact]);

  return (
    <EditCreateContactContainer>
      <FormConstructor formState={formState} />
    </EditCreateContactContainer>
  );
};
export default EditCreateContact;
