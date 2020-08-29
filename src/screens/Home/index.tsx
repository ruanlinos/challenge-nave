import React from 'react';
import {TouchableOpacity} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions} from '@react-navigation/native';
import Logo from '../../assets/Logo.svg';
import Navers from './Navers';
import DetailedNaver from './DetailedNaver';
import AddNewNaver from './AddNewNaver';

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
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <MaterialIcons name="menu" size={32} />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingHorizontal: 17.5,
          },
        })}
      />
      <AppStack.Screen
        name="DetailedNaver"
        component={DetailedNaver}
        options={({navigation}) => ({
          headerTitle: () => <Logo width={124} height={32} />,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="chevron-left" size={32} />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingHorizontal: 17.5,
          },
        })}
      />
      <AppStack.Screen
        name="AddNewNaver"
        component={AddNewNaver}
        options={({navigation}) => ({
          headerTitle: () => <Logo width={124} height={32} />,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.reset({index: 0, routes: [{name: 'Navers'}]})
              }>
              <MaterialIcons name="chevron-left" size={32} />
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
