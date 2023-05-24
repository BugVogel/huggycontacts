import React, {useState} from 'react';
import {View, Text} from 'react-native';
import FormConstructor from '../../components/formconstructor/FormConstructor';
import {EditCreateContactContainer} from './styles';
import mockForms from '../../mock/mockForms';
import BaseButton from '../../styles/components/basebutton/BaseButton';
import {putValues} from './utils';

const EditCreateContact = props => {
  const [formStateValues, setFormStateValues] = useState([]);
  const formState = {formStateValues, setFormStateValues};
  const contact = props.route.params;
  const formJSON = contact
    ? putValues(mockForms.register, contact)
    : mockForms.register;

  return (
    <EditCreateContactContainer>
      <FormConstructor formJSON={formJSON} formState={formState} />
      {/* <BaseButton onPress={() => console.log(formStateValues)}>
        <Text>TESTE</Text>
      </BaseButton> */}
    </EditCreateContactContainer>
  );
};
export default EditCreateContact;
