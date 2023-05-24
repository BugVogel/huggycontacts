import React, {useState} from 'react';
import {View, Text} from 'react-native';
import FormConstructor from '../../components/formconstructor/FormConstructor';
import {EditCreateContactContainer} from './styles';
import mockForms from '../../mock/mockForms';
import BaseButton from '../../styles/components/basebutton/BaseButton';

const EditCreateContact = props => {
  const [formStateValues, setFormStateValues] = useState([]);
  const formState = {formStateValues, setFormStateValues};

  return (
    <EditCreateContactContainer>
      <FormConstructor formJSON={mockForms.register} formState={formState} />
      {/* <BaseButton onPress={() => console.log(formStateValues)}>
        <Text>TESTE</Text>
      </BaseButton> */}
    </EditCreateContactContainer>
  );
};
export default EditCreateContact;
