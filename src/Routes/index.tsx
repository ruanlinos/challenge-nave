import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../screens/Login';
import Home from '../screens/Home';
import AsyncStorage from '@react-native-community/async-storage';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Rocket from '../assets/icons/rocket.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

const Routes: React.FC = () => {
  const [hasToken, setHasToken] = React.useState<boolean>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('@nave::token');
      if (token) {
        setHasToken(true);
        setLoading(false);
      } else {
        setHasToken(false);
        setLoading(false);
      }
    };

    getToken();
  }, []);

  const handleLoggout = async navigation => {
    await AsyncStorage.multiRemove(['@nave::token', '@nave::userid']);
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
  };

  return (
    <AnimatedSplash isLoaded={!loading} customComponent={<Rocket size={800} />}>
      {!loading && (
        <Drawer.Navigator
          initialRouteName={hasToken ? 'Home' : 'Login'}
          drawerContent={({navigation}) => (
            <>
              <TouchableOpacity
                style={{top: 25, left: 17, position: 'absolute'}}
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }>
                <MaterialIcons name="menu" size={32} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.jumpTo('Home'))
                }>
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 22,
                    textAlign: 'center',
                    marginBottom: 24,
                  }}>
                  Navers
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleLoggout(navigation)}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 22,
                    textAlign: 'center',
                  }}>
                  Sair
                </Text>
              </TouchableOpacity>
            </>
          )}
          drawerStyle={{
            justifyContent: 'center',
            width: '80%',
          }}>
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{swipeEnabled: false}}
          />
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      )}
    </AnimatedSplash>
  );
};

export default Routes;
