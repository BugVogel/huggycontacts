import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './routes/StackNavigator';
import ThemeProvider from './context/ThemeProvider';

const App = props => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
