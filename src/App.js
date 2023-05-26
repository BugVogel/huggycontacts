import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './routes/StackNavigator';
import ThemeProvider from './context/ThemeProvider';
import ReducerProvider from './context/ReducerProvider';
import '../config';
import NotificationProvider from './context/NotificationProvider';

const App = props => {
  return (
    <ThemeProvider>
      <ReducerProvider>
        <NotificationProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </NotificationProvider>
      </ReducerProvider>
    </ThemeProvider>
  );
};

export default App;
