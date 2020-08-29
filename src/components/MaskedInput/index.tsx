import React from 'react';
import {View, Text, TextInputProps} from 'react-native';
import {Label, Container, ErrorText, TextInput} from './styles';

interface IProps {
  label?: string;
  placeholder?: string;
  hasError?: string;
  props?: TextInputProps;
}
const Input: React.FC<IProps> = ({label, placeholder, props, hasError}) => (
  <Container>
    <Label>{label}</Label>
    <TextInput placeholder={placeholder} {...props} />
    {hasError && <ErrorText>{hasError}</ErrorText>}
  </Container>
);

export default Input;
