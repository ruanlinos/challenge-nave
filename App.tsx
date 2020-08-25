import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/Routes';

const App: React.FC = () => {
  return (
    <NavigationContainer independent>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
