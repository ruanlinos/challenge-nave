import React from 'react';
import {TextInputProps} from 'react-native';
import {TextInput, Label, Container, ErrorText} from './styles';

interface IProps {
  label?: string;
  placeholder?: string;
  hasError?: string;
  props?: TextInputProps;
}
const Input: React.FC<IProps> = ({label, placeholder, props, hasError}) => (
  <Container>
    <Label>{label}</Label>
    <TextInput placeholder={placeholder} hasError={hasError} {...props} />
    {hasError && <ErrorText>{hasError}</ErrorText>}
  </Container>
);

export default Input;
