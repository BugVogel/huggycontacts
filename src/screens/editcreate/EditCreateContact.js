import React, {useState, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import FormConstructor from '../../components/formconstructor/FormConstructor';
import {EditCreateContactContainer} from './styles';
import mockForms from '../../mock/mockForms';
import BaseButton from '../../styles/components/basebutton/BaseButton';
import {putValues} from './utils';
import {ReducerContext} from '../../context/ReducerProvider';
import {addContact, updateContact} from '../../apirequests/contacts';

const EditCreateContact = props => {
  const [formStateValues, setFormStateValues] = useState([]);
  const {contactsState, dispatchContacts} = useContext(ReducerContext).contacts;
  const formState = {formStateValues, setFormStateValues};
  const contact = props.route.params;
  const formJSON = contact
    ? putValues(mockForms.register, contact)
    : mockForms.register;

  useEffect(() => {
    contact && props.navigation.setOptions({title: 'Editar contato'});
  }, []);

  useEffect(() => {
    if (contactsState?.saveContact) {
      const newContact = {};
      formStateValues.map(input => {
        input?.value && (newContact[input.name] = input.value);
      });

      addContact(dispatchContacts, newContact);
      props.navigation.navigate('Contacts');
    }
  }, [contactsState?.saveContact]);

  useEffect(() => {
    if (contactsState?.updateContact) {
      const newContact = {id: contact.id};
      formStateValues.map(input => {
        input?.value && (newContact[input.name] = input.value);
      });

      updateContact(dispatchContacts, newContact);
      props.navigation.navigate('Contacts');
    }
  }, [contactsState?.updateContact]);

  return (
    <EditCreateContactContainer>
      <FormConstructor formJSON={formJSON} formState={formState} />
    </EditCreateContactContainer>
  );
};
export default EditCreateContact;
