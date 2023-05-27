import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/login/Login';
import Contacts from '../screens/contacts/Contacts';
import HeaderButtons from '../components/headerbuttons/HeaderButtons';
import SeeContact from '../screens/seecontact/SeeContact';
import EditCreateContact from '../screens/editcreate/EditCreateContact';
import {ReducerContext} from '../context/ReducerProvider';
import SearchBar from '../components/searchbar/SearchBar';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const {userState} = useContext(ReducerContext).user;

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{cardStyle: {backgroundColor: '#FFF'}}}>
      <Stack.Screen
        name="Home"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={
          userState?.searchbarEnabled
            ? {header: () => <SearchBar />}
            : {
                title: 'Contatos',
                headerRight: () => <HeaderButtons contacts />,
                headerLeft: () => null,
              }
        }
      />
      <Stack.Screen
        name="SeeContact"
        component={SeeContact}
        options={{
          title: 'Visualizar Contato',
          headerRight: () => <HeaderButtons seecontact />,
        }}
      />
      <Stack.Screen
        name="EditCreateContact"
        component={EditCreateContact}
        options={{
          title: 'Criar Contato',
          headerRight: () => <HeaderButtons edit />,
          headerLeft: () => <HeaderButtons leftClose />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
