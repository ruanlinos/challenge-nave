import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/Logo.svg';
import Input from '../../components/Input';

const Login: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 16,
        }}>
        <Logo width={156} height={40} style={{marginBottom: 50}} />
        <Input
          label="E-mail"
          placeholder="E-mail"
          props={{
            keyboardType: 'email-address',
            autoCompleteType: 'email',
          }}
        />
        <Input
          label="Senha"
          placeholder="Senha"
          props={{
            keyboardType: 'default',
            autoCompleteType: 'password',
            secureTextEntry: true,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            width: '100%',
            alignItems: 'center',
            paddingVertical: 8,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate('Home')}
        >
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Montserrat-SemiBold',
              lineHeight: 24,
            }}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Login;
