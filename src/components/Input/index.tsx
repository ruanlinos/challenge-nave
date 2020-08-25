import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';

import Logo from '../../assets/Logo.svg';

interface IProps {
  label?: string;
  placeholder?: string;
  props?: TextInputProps;
}
const Input: React.FC<IProps> = ({label, placeholder, props}) => (
  <View
    style={{
      width: '100%',
      marginBottom: 30,
    }}
  >
    <Text
      style={{
        fontFamily: 'Montserrat-SemiBold',
        lineHeight: 18,
      }}
    >
      {label}
    </Text>
    <TextInput
      placeholder={placeholder}
      style={{
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        borderColor: '#000',
        borderWidth: 1,
        padding: 8,
        width: '100%',
      }}
      {...props}
    />
  </View>
);

export default Input;
