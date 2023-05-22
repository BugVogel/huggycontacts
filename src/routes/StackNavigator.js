import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Login} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
