import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './routes/StackNavigator';
import ThemeProvider from './context/ThemeProvider';
import ReducerProvider from './context/ReducerProvider';
import '../config';

const App = props => {
  return (
    <ThemeProvider>
      <ReducerProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ReducerProvider>
    </ThemeProvider>
  );
};

export default App;
