import React from 'react';
import {TouchableOpacity} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../assets/Logo.svg';
import Navers from './Navers';
import { DrawerActions } from '@react-navigation/native';

const AppStack = createStackNavigator();
const Home: React.FC = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Navers"
        component={Navers}
        options={({navigation}) => ({
          headerTitle: () => <Logo width={124} height={32} />,
          headerTitleAlign: 'center',
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <MaterialIcons name="menu" size={21} />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingHorizontal: 17.5,
          },
        })}
      />
    </AppStack.Navigator>
  );
};

export default Home;
