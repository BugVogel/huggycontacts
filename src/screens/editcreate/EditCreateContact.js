import React from 'react';
import {View, Text} from 'react-native';
import FormConstructor from '../../components/formconstructor/FormConstructor';
import {EditCreateContactContainer} from './styles';
import mockForms from '../../mock/mockForms';

const EditCreateContact = props => {
  return (
    <EditCreateContactContainer>
      <FormConstructor formJSON={mockForms.register} />
    </EditCreateContactContainer>
  );
};
export default EditCreateContact;
