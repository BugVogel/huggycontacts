import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/login/Login';
import Contacts from '../screens/contacts/Contacts';
import HeaderButtons from '../components/headerbuttons/HeaderButtons';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Contacts">
      <Stack.Screen
        name="Home"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: 'Contatos',
          headerRight: () => <HeaderButtons contacts />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
