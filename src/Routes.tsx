import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './screens/Login';
import Home from './screens/Home';

const Drawer = createDrawerNavigator();
const Routes: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{swipeEnabled: false}}
      />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default Routes;
