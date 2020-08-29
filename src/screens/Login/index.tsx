import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Button, ButtonText} from './styles';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../api';
import Logo from '../../assets/Logo.svg';
import Input from '../../components/Input';
const Login: React.FC = () => {
  const navigation = useNavigation();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Você deve informar um e-mail válido')
      .required('Você deve informar um e-mail!'),
    password: Yup.string()
      .min(6, 'As senhas devem ter pelo menos 6 digitos')
      .required('Você deve informar uma senha'),
  });

  const handleSubmit = async values => {
    try {
      const {data} = await api.post('/users/login', values);
      if (data) {
        await AsyncStorage.setItem('@nave::userID', data.id);
        await AsyncStorage.setItem('@nave::token', data.token);

        navigation.reset({index: 0, routes: [{name: 'Home'}]});
      }
    } catch (error) {}
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Container>
        <Logo width={156} height={40} style={{marginBottom: 50}} />

        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={handleSubmit}
          validationSchema={schema}>
          {({
            values,
            setFieldTouched,
            handleChange,
            errors,
            handleSubmit,
            isValid,
          }) => (
            <>
              <Input
                label="E-mail"
                placeholder="E-mail"
                hasError={errors.email}
                props={{
                  keyboardType: 'email-address',
                  autoCompleteType: 'email',
                  value: values.email,
                  onChangeText: handleChange('email'),
                  onBlur: () => setFieldTouched('email'),
                }}
              />

              <Input
                label="Senha"
                placeholder="Senha"
                hasError={errors.password}
                props={{
                  keyboardType: 'default',
                  autoCompleteType: 'password',
                  secureTextEntry: true,
                  value: values.password,
                  onChangeText: handleChange('password'),
                  onBlur: () => setFieldTouched('password'),
                }}
              />

              <Button
                isValid={isValid}
                onPress={handleSubmit}
                disabled={!isValid}>
                <ButtonText>Entrar</ButtonText>
              </Button>
            </>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default Login;
